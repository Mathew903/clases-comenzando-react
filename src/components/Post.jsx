const Post = () => {
  
    /*obtenemos datos desde una API con fetch
    const getData = async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts")
        const data = await res.json();
        console.log(data)
    }
    */

    const datos = [
        {id: 1, title: "titulo1", description: "descripcion1"},
        {id: 2, title: "titulo2", description: "descripcion2"},
        {id: 3, title: "titulo3", description: "descripcion3"},
        {id: 4, title: "titulo4", description: "descripcion4"},
        {id: 5, title: "titulo5", description: "descripcion5"},
        {id: 6, title: "titulo6", description: "descripcion6"},
        {id: 7, title: "titulo7", description: "descripcion7"},
        {id: 8, title: "titulo8", description: "descripcion8"},
        {id: 9, title: "titulo9", description: "descripcion9"},
        {id: 10, title: "titulo10", description: "descripcion10"},
    ]

    return (
        <>
            {datos.map(({title, description, id}) => (
                <div 
                    key={id} 
                    style={{backgroundColor: "#202020", padding: "20px", margin: "20px", color: "#dddd"}}>
                    <h2> {title} </h2>
                    <span> {description} </span>
                </div>
            ))
            }
        </>
    )
}

export default Post