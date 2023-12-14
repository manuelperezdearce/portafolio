export default function EducationItem({ imgUrl, institution, date, carreer }) {
    return (
        <div className="flex gap-2">
            <img className="w-10 h-10" src={imgUrl} alt="logo institución" />
            <div>
                <p className="text-xl font-medium">
                    {institution}
                </p>
                <p className="text-sm opacity-80">
                    {date}
                </p>
                <p>
                    {carreer}
                </p>
            </div>
        </div>
    )
}