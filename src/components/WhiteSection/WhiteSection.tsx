import useWhiteSectionStyles from './WhiteSection.style'
import { ReactChild, FC } from 'react'
import { Box } from '@mui/material'
import photo from '@/img/my_photo.jpeg'
import PrimaryButton from "@/components/PrimaryButton/PrimaryButton";
const { log } = console

interface WhiteSectionProps {
   
   children?: ReactChild,
}

const WhiteSection: FC<WhiteSectionProps> = ({ children }) => {
    const S = useWhiteSectionStyles()

    return(

      <S.WhiteSection className="WhiteSection">
         <S.WhiteSectionItem>
             <S.SectionHeader component={'h3'}>
                 Сайт <br/> учителя
             </S.SectionHeader>
             <S.SectionText>
                 русского языка и литературы <br/> Таран Людмилы Сергеевны
             </S.SectionText>
             <PrimaryButton>Кнопка</PrimaryButton>
         </S.WhiteSectionItem>
          <S.WhiteSectionItem>
              <img alt={'df'} src={photo}/>
          </S.WhiteSectionItem>
      </S.WhiteSection>
    )
}
export default WhiteSection