import styled from '@emotion/styled';
// import recipeMob from 'img/recipePage/recipe_mob.jpg';
// import recipeMob2 from 'img/recipePage/recipe_mob@2x.jpg';
// import recipeTable from 'img/recipePage/recipe_tabl.jpg';
// import recipeTable2 from 'img/recipePage/recipe_tabl@2x.jpg';
import recipeDesk from '../../img/recipePage/recipe_desk.jpg';
import recipeDesk2 from '../../img/recipePage/recipe_desk@2x.jpg';

export const Container = styled.div`
  /* display: flex; */
  width: 100%;
  height: 100vh;
  /* justify-content: center; */
  /* align-items: center; */
  /* margin-left: -100px; */
  /* margin-right: -100px; */
  /* background-color: lightgreen; */
`;

export const ImgBox = styled.div`
  width: 100%;
  height: 493px;
  background-image: url(${recipeDesk});
  background-size: cover;
  background-size: 1440px 493px;
  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${recipeDesk2});
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
`;

export const Title = styled.h1`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 44px;
  line-height: 44px;
  /* identical to box height, or 100% */

  letter-spacing: -0.02em;
  font-feature-settings: 'liga' off;

  color: #8baa36;

  margin-bottom: 24px;
`;

export const Paragraph = styled.p`
  width: 656px;
  height: 72px;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  /* or 133% */

  text-align: center;
  letter-spacing: -0.02em;

  color: #23262a;
`;

export const MenuItem = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  display: flex;
  align-items: center;
  letter-spacing: 0.03em;

  color: #fafafa;
`;
