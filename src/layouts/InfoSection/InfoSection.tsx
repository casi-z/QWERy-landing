import useInfoSectionStyles from './InfoSection.style'
import { ReactChild, FC } from 'react'
import { Box } from '@mui/material'
import Mountains from '@/img/mountains.png'
const { log } = console

interface InfoSectionProps {
   
   children?: ReactChild,
   
}

const InfoSection: FC<InfoSectionProps> = ({ children }) => {
const S = useInfoSectionStyles()

    return(
      <S.InfoSection container className="InfoSection">
          <S.InfoSectionItem item md={5}>
              <img src={Mountains} alt=""/>
          </S.InfoSectionItem>
          <S.InfoSectionItem item md={5}>

          </S.InfoSectionItem>
      </S.InfoSection>
    )
}
export default InfoSection