import  NavModel  from '../material/NavModel';
import photo2 from '../../assets/default.svg'
import styled from "styled-components";


const Image = styled.img`
  margin: 20px auto;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 500px;
  margin-bottom: 20px;
`;

export default function Navbar(){
  return(
    <div>
    <NavModel />
    <Image src={photo2} alt="photo default"/>
    </div>
  )
}