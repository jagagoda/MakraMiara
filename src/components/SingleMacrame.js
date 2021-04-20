import BarMenu from "./BarMenu";
import SubMenuFooter from "./SubMenuFooter";
import {
    SectionMacrame,
    ProjectBox,
} from "../components/styles/styles"
const SingleMacrame = ({title, subtitle, text1, text2, text3, src, alt}) => {
    return (
        <>
            <BarMenu/>
            <SectionMacrame>
                <ProjectBox className="flexbox">
                    <div className="box__image">
                        <img src={src} alt={alt} className="proj__img"/>
                    </div>
                    <div className="project__column">
                        <h2 className="stat__num">{title}</h2>
                        <p className="stat__text">{subtitle}</p>
                        <ul className="stat__text">
                            <li>{text1}</li>
                            <li>{text2}</li>
                            <li>{text3}</li>
                        </ul>
                    </div>
                </ProjectBox>
            </SectionMacrame>
            <SubMenuFooter/>
        </>
    );
};

export default SingleMacrame;