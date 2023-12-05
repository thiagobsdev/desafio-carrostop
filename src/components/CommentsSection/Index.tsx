import Comment from "../Comment/Index";
import "./styles.css"

export default function CommentSection () {
    return (
        <section className="dscar-bg-comments">
            <div className="dcar-container">
                <h2>
                    O que estão dizendo
                </h2>
                <Comment/>
                <Comment />
                <Comment/>
                <Comment />
                <Comment/>
                <Comment />
                <Comment/>
                <Comment />
            </div>
        </section>
    );
}