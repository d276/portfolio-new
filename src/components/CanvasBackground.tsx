import React, { useEffect, useRef } from 'react';

interface CanvasBackgroundProps {
    theme: string;
}

export const CanvasBackground: React.FC<CanvasBackgroundProps> = ({ theme }) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let particles: Particle[] = [];
        let particleCount = 60;
        let maxDistance = 120;
        let animationFrameId: number;

        const mouse = {
            x: null as number | null,
            y: null as number | null,
            radius: 150
        };

        // Determine particle colors based on active theme
        let particleColor = theme === 'light' ? 'rgba(79, 70, 229, 0.25)' : 'rgba(99, 102, 241, 0.4)';
        let lineColor = theme === 'light' ? 'rgba(79, 70, 229, 0.04)' : 'rgba(99, 102, 241, 0.08)';
        let secondaryParticleColor = theme === 'light' ? 'rgba(8, 145, 178, 0.25)' : 'rgba(6, 182, 212, 0.4)';

        class Particle {
            x: number;
            y: number;
            vx: number;
            vy: number;
            radius: number;
            isSecondary: boolean;

            constructor() {
                this.x = Math.random() * (canvas?.width || window.innerWidth);
                this.y = Math.random() * (canvas?.height || window.innerHeight);
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5;
                this.radius = Math.random() * 2 + 1;
                this.isSecondary = Math.random() > 0.7;
            }

            update() {
                if (!canvas) return;
                
                // Boundaries
                if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx;
                if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy;

                this.x += this.vx;
                this.y += this.vy;

                // Mouse interaction
                if (mouse.x !== null && mouse.y !== null) {
                    const dx = this.x - mouse.x;
                    const dy = this.y - mouse.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < mouse.radius) {
                        const force = (mouse.radius - dist) / mouse.radius;
                        this.x += (dx / dist) * force * 1.5;
                        this.y += (dy / dist) * force * 1.5;
                    }
                }
            }

            draw() {
                if (!ctx) return;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = this.isSecondary ? secondaryParticleColor : particleColor;
                ctx.fill();
            }
        }

        const initParticles = () => {
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        };

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            if (window.innerWidth < 768) {
                particleCount = 30;
                maxDistance = 80;
            } else {
                particleCount = 65;
                maxDistance = 120;
            }
            initParticles();
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].draw();

                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < maxDistance) {
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);

                        const alpha = (1 - dist / maxDistance) * 0.8;
                        const currentLineColor = lineColor
                            .replace('0.08', (alpha * 0.08).toString())
                            .replace('0.04', (alpha * 0.04).toString());
                            
                        ctx.strokeStyle = currentLineColor;
                        ctx.lineWidth = 0.8;
                        ctx.stroke();
                    }
                }
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        const handleMouseOut = () => {
            mouse.x = null;
            mouse.y = null;
        };

        const handleTouchMove = (e: TouchEvent) => {
            if (e.touches.length > 0) {
                mouse.x = e.touches[0].clientX;
                mouse.y = e.touches[0].clientY;
            }
        };

        const handleTouchEnd = () => {
            mouse.x = null;
            mouse.y = null;
        };

        window.addEventListener('resize', resizeCanvas);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseout', handleMouseOut);
        window.addEventListener('touchmove', handleTouchMove);
        window.addEventListener('touchend', handleTouchEnd);

        resizeCanvas();
        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseout', handleMouseOut);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('touchend', handleTouchEnd);
            cancelAnimationFrame(animationFrameId);
        };
    }, [theme]);

    return <canvas id="hero-canvas" ref={canvasRef} />;
};
