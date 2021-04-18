import Card from './Card';

const mockItem = {
    "title": "Galaxy s III mini SM-G730V Verizon Cell Phone BLUE",
    "brand": "Samsung",
    "image": "/phone_images/Samsung.jpeg",
    "stock": 9,
    "seller": "5f5237a4c1beb1523fa3db73",
    "price": 56.0,
    "reviews": [
      {
        "reviewer": "5f5237a4c1beb1523fa3db1f",
        "rating": 3,
        "comment": "Got phone yesterday all ... pleased now!"
      }
    ]
}

const Home = () => {
    return (
        <div>
            <Card
                item={mockItem} />
        </div>
    )
}

export default Home
