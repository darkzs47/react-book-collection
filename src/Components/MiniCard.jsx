import {memo} from "react";
import styles from "../Pages/settings.module.css"
import {Card} from "antd";
const {Meta} = Card;
import FavoriteIcon from "@mui/icons-material/Favorite";

const MiniCard = () => {
    return (
        <div className={styles.miniCard}>
            <Card
                cover={
                    <img
                        alt="image"
                        src={'../../public/images/0.png'}
                        style={{height: "100px"}}
                    />
                }
                >
            <div className={styles.metaContainer}>
                <Meta
                    title='Название'
                    description='Автор, 2000 год'
                />
                <button className={styles.favoriteIconContainer}>
                    <FavoriteIcon style={{fontSize: '12px'}} className={styles.favoriteIconTrue}/>
                </button>
            </div>
        </Card>
</div>
)
}

export default memo(MiniCard);