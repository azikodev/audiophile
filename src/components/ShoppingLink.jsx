//images
import headphones from "../../public/assets/shared/desktop/image-category-thumbnail-headphones.png";
import earphones from "../../public/assets/shared/desktop/image-category-thumbnail-earphones.png";
import audiophile from "../../public/assets/shared/desktop/image-category-thumbnail-speakers.png";

//Link
import { Link } from "react-router-dom";

function ShoppingLink() {
  return (
    <div>
      <div className="links_img_wrapper mb-[200px] container">
        <ul className="flex items-center flex-wrap gap-5 justify-center  ">
          <li className="hover:text-orange-300">
            <Link className="link_img_item" to="/headphones">
              <img
                className="link_img_item_img"
                width={260}
                height={121}
                src={headphones}
                alt="headphone img"
              />
              <h3 className="font-bold">HEADPHONES</h3>
              <p className="btn btn-3 flex gap-2">
                SHOP
                <p className="text-orange-300 hover">{`>`}</p>
              </p>
            </Link>
          </li>
          <li className="hover:text-orange-300">
            <Link className="link_img_item" to="/speakers">
              <img
                className="link_img_item_img"
                src={audiophile}
                width={270}
                height={121}
                alt="speaker img"
              />
              <h3 className="font-bold">SPEAKERS</h3>
              <p className="btn btn-3 flex gap-2">
                SHOP
                <p className="text-orange-300">{`>`}</p>
              </p>
            </Link>
          </li>
          <li className="hover:text-orange-300">
            <Link className="link_img_item" to="/earphones">
              <img
                className="link_img_item_img"
                width={290}
                height={121}
                src={earphones}
                alt="earphone img"
              />
              <h3 className="font-bold">EARPHONES</h3>
              <p className="btn btn-3 flex gap-2">
                SHOP
                <p className="text-orange-300">{`>`}</p>
              </p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ShoppingLink;
