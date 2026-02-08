/**
 * Intersection Observer Action
 * Dispatches 'enter' event when element enters viewport.
 * Adds 'is-visible' class automatically.
 */
export function intersection(node, options = { threshold: 0.1, once: true }) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                node.dispatchEvent(new CustomEvent('enter'));
                node.classList.add('is-visible');
                if (options.once) {
                    observer.unobserve(node);
                }
            }
        });
    }, options);

    observer.observe(node);

    return {
        destroy() {
            observer.disconnect();
        }
    };
}
