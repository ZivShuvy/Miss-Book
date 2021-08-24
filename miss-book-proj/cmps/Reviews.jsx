export function Reviews({ book, onRemoveReview }) {
    const { reviews, id } = book;
    function isHasReviews() {
        if (!reviews || !reviews.length) return false;
        else if (reviews && reviews.length) return true;
    }
    return (
        <section className="reviews">
            {!isHasReviews() && <h2>There are no reviews yet! be the first one to add a review...</h2>}
            {isHasReviews() &&
                <div className="reviews-container">
                    {book.reviews.map((review) => (
                        <div key={review.id} className="review">
                            <h2>{review.name}</h2>
                            <p>{review.reviewTxt}</p>
                            <span>{review.date}</span>
                            <button className="remove-btn" onClick={() => onRemoveReview(review.id, id)}>&#10008;</button>
                        </div>
                    ))}
                </div>
            }
        </section>
    )
}