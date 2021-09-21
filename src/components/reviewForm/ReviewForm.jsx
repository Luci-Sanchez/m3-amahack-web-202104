import { useState } from "react";
import { createReview } from "../../services/ProductService";

export default function ReviewForm({ productId, onCreate }) {
  const [review, setReview] = useState({
    title: "",
    description: "",
    score: 3,
  });

  const [error, setError] = useState();

  const onChange = (event) => {
    setReview((old) => ({ ...old, [event.target.name]: event.target.value }));
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    createReview(review, productId)
      .then((r) => {
        onCreate(r);
      })
      .catch((e) => {
        setError(e.response.data.message);
      });
  };

  return (
    <div className="ReviewForm">
      <h3>Write your review</h3>
      {error && <p>There was an error: {error}</p>}
      <form onSubmit={onFormSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            name="title"
            id="title"
            value={review.title}
            onChange={onChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            value={review.description}
            onChange={onChange}
          />
        </div>
        <div>
          <label htmlFor="score">Score</label>
          <input
            name="score"
            id="score"
            value={review.score}
            type="number"
            min="0"
            max="5"
            step="1"
            onChange={onChange}
          />
        </div>
        <button type="submit">Add review</button>
      </form>
    </div>
  );
}
