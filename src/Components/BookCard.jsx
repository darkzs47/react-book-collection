import {memo} from "react";
import {Card} from "antd";

const {Meta} = Card;
import {FavoriteTwoTone} from "@mui/icons-material"
import styles from "../Layouts/bookList.module.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {useDispatch} from "react-redux";
import {toggleFavorite} from "../redux/books/actions.js";

const BookCard = ({book, onClick}) => {

    const dispatch = useDispatch();

    return (
        <Card
            onClick={onClick}
            className={styles.bookCard}
            cover={
                <img
                    alt="image"
                    src={`../../${book.img}`}
                    style={{height: "200px"}}
                />
            }
        >
            <div className={styles.metaContainer}>
                <Meta
                    title={book.title}
                    description={`${book.author}, ${book.year} год`}
                />
                <button style={{display: ''}} onClick={(e) => e.stopPropagation()}>
                    {
                    book.favorite ?
                        <FavoriteIcon className={styles.favoriteIconTrue}
                                      onClick={() => dispatch(toggleFavorite(book.id))}/> :
                        <FavoriteTwoTone className={styles.favoriteIconFalse}
                                         onClick={() => dispatch(toggleFavorite(book.id))}/>
                }
                </button>

            </div>
        </Card>
    )
}

export default memo(BookCard);