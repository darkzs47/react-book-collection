import {memo} from "react";
import styles from "./bookInfo.module.css"
import {useNavigate} from "react-router-dom";
import {Button} from "antd";
import {CheckCircleOutlined, HeartOutlined} from "@ant-design/icons";
import {toggleFavorite} from "../redux/books/actions.js";
import {useDispatch} from "react-redux";

const BookInfo = ({book}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    return (
        <aside className={styles.bookInfo}>
            <div className={styles.returnButtonContainer}>
                <button
                    onClick={() => navigate(-1)}
                    className={styles.returnButton}
                >На главную
                </button>
                <h1>Информация о книге</h1>
            </div>
            <div className={styles.bookDetails}>
                <img
                alt="image"
                src={`../../${book.img}`}
                style={{height: "250px"}}
            />
                <h2 className={styles.title}>Название: {book.title}</h2>
                <h3 className={styles.author}>Автор: {book.author}</h3>
                <div className={styles.meta}>
                    Год: <span className={styles.year}>{book.year}</span> <br />
                    ISBN: <span className={styles.isbn}>{book.ISBN}</span> <br />
                </div>
                <div className={styles.descriptionWrapper}>
                    <p className={styles.description}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aut eaque error, eum facere impedit
                        ipsam necessitatibus nemo, officia pariatur vel veniam voluptatibus voluptatum?
                    </p>
                </div>
                {
                    book.favorite ?
                        <Button
                            type="primary"
                            icon={<CheckCircleOutlined/>}
                            className={styles.favoriteButton}
                            onClick={() => dispatch(toggleFavorite(book.id))}

                        >
                            В избранном
                        </Button> :
                        <Button
                            type="primary"
                            icon={<HeartOutlined/>}
                            className={styles.favoriteButton}
                            onClick={() => dispatch(toggleFavorite(book.id))}
                        >
                            В избранное
                        </Button>
                }
            </div>

        </aside>
    )
}

export default memo(BookInfo);