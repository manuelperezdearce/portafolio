export default function ServicesCard() {
    return (
        <div className="w-1/3 px-5 [&>*]:my-4 flex flex-col items-center" >
            <img className="w-52 rounded-full aspect-square " src="https://www.ikusi.com/mx/wp-content/uploads/sites/2/2022/06/post_thumbnail-4efabca9bd56b38edc0058c4ba006481.jpeg" alt="Services Photo" />
            <h3 className="font-bold uppercase text-3xl">
                Servicio 1
            </h3>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae facilis, aspernatur numquam error placeat autem.
            </p>
        </div>
    )
}