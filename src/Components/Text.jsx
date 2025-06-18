import {memo} from "react";
import {useBookPageContext} from "../localContexts/BookPageContext.jsx";

const Text = () => {

    const { fontSize, fontStyle, textColor } = useBookPageContext();

    return (
        <div style={{
            fontSize: fontSize === "small" ? "14px" : fontSize === "large" ? "20px" : "16px",
            fontStyle: fontStyle === "italic" ? "italic" : "normal",
            fontWeight: fontStyle === "bold" ? "bold" : "normal",
            color: textColor === "sepia" ? "#5B4636" : textColor === "darkblue" ? "#002244" : "#000",
        }}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum deleniti, dolore eligendi exercitationem
                expedita facere fugiat impedit maiores, maxime nam nemo omnis optio porro quod rem saepe sapiente totam,
                unde.</p><p>Accusamus ad atque cumque ea exercitationem ipsa magnam, minus nam pariatur quae recusandae
            rem repellat temporibus veritatis voluptates? Ab alias atque consequatur deserunt distinctio expedita ipsum,
            officia quasi tempore vero.</p><p>Ab accusantium aspernatur at blanditiis culpa cumque, cupiditate dolore
            dolores dolorum enim eveniet exercitationem facere fugiat iure labore laboriosam laudantium maxime mollitia
            omnis reprehenderit sint suscipit tenetur vel veniam voluptatibus.</p><p>Aspernatur aut ducimus, expedita
            incidunt itaque, iure maxime molestias necessitatibus perferendis quae reiciendis repellat sunt ullam unde
            voluptate. Autem eius id iure odio odit possimus, praesentium quos ratione repudiandae tenetur!</p><p>Alias
            aliquam aliquid architecto culpa dolorum ducimus ea earum eos error est exercitationem ipsum iste itaque
            libero minima modi odio, possimus praesentium recusandae sequi suscipit, tempore ullam veniam voluptate
            voluptatem!</p><p>Accusamus deleniti excepturi laborum officiis voluptas. Ad aliquam aperiam, architecto
            beatae consequatur deleniti eaque hic maiores nemo, numquam officiis suscipit temporibus voluptatum. Amet
            dolore fugit harum modi molestias repudiandae similique!</p><p>Ducimus fuga fugit laudantium sequi tenetur
            ullam voluptates! Aspernatur at dicta facilis, illo magnam rem reprehenderit ut voluptatibus. Consectetur
            cum enim error iste perferendis, rerum saepe veritatis. Ea labore, possimus?</p><p>Dolor facilis mollitia
            unde? Aliquam, blanditiis cupiditate dolor enim et eum fuga impedit in ipsam maiores maxime nam natus nihil
            obcaecati odit omnis optio porro quibusdam quidem rerum suscipit vitae.</p><p>Adipisci asperiores
            blanditiis, consequatur delectus distinctio doloremque ducimus ea earum, facere, non pariatur ratione
            recusandae rerum vel voluptatibus! Enim maxime necessitatibus nisi perferendis quidem quo sit, vel?
            Asperiores, consectetur nemo.</p>
        </div>
    )
}

export default memo(Text);