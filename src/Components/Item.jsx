export default function Item(props){
    return(
        <div style= {{border: '1px solid black', borderRadius: '8px', width: '200px', height: '300px', margin: '15px', boxShadow: ' 0px, 0px, 5px #000000'}}>
            <span>{props.price}</span>
            <div style={{width: '300px', margin: "15px",}}>{props.title}</div>
            <img src= {props.imageURL} alt=""/>
            <div style={{width: '100%', textAlign: 'center'}}>{props.description}</div>

        </div>
    )
}