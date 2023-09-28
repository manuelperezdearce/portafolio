export default function Section({ name, styles, children }) {
    return (
        <section name={name} className={`${styles} min-h-screen py-36 px-[10%] md:px-[15%] lg:px-[20%] shadow-lg`}>
            {children}
        </section>
    )
}