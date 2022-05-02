import ContentLP from "../ContentLP/ContentLP";
import Header from "../Header/Header";

const HomePage = (props) => {
    const { allUsers } = props;
    return ( 
        <>
            <Header />
            <ContentLP allUsers={ allUsers }/>
        </>
     );
}
 
export default HomePage;