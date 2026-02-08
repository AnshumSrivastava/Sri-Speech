export function fade(node, { delay = 0, duration = 800, y = 30 } = {}) {
    const o = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    node.style.opacity = '1';
                    node.style.transform = 'translateY(0)';
                }, delay);
                o.unobserve(node);
            }
        });
    }, { threshold: 0.1 });

    node.style.opacity = '0';
    node.style.transform = `translateY(${y}px)`;
    node.style.transition = `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1), transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1)`;
    node.style.willChange = 'opacity, transform';

    o.observe(node);

    return {
        destroy() {
            o.disconnect();
        }
    };
}
