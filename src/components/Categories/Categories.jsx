import { useSearchParams } from "react-router-dom";
import Container from "../Shared/Container";
import { categories } from "./CategoriesData";
import CategoryBox from "./CategoryBox";


const Categories = () => {
    // eslint-disable-next-line no-unused-vars
    const [params, setParams] = useSearchParams();
    const category = params.get('category');

    return (
        <Container>
            <div className="pt-4 flex items-center justify-between overflow-x-auto">
                {categories.map(item => <CategoryBox key={item.label} label={item.label} icon={item.icon} selected={category === item.label} />)}
            </div>
        </Container>
    );
};

export default Categories;