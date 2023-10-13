import Card from 'react-bootstrap/Card';

function BookItem(props){
     
    return (
        <div>
             <Card> {/* card added from react */}
      <Card.Header>{props.myBook.title}</Card.Header>
      <Card.Body>
      <img src={props.myBook.thumbnailUrl}></img>
      <p>{props.myBook.authors[0]}</p>
        
      </Card.Body>
    </Card>

            <h2>{props.myBook.title}</h2> {/* displays book titles using h2 */}
            <img src={props.myBook.thumbnailUrl}></img>
            <p>{props.myBook.authors[0]}</p>
        </div>
        
    );
    
    
}
export default BookItem;