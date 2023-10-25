export default function Section({ name, styles, children }) {
    return (
        <section name={name} className={`${styles} min-h-screen py-36 px-2 md:px-[0%] lg:px-[0%] relative max-w-[1200px] mx-auto`}>
            {children}
        </section>
    )
}