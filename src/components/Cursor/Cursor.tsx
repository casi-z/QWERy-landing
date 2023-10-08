import {
    FC,
    useState,
    useEffect
} from 'react'

import {
    Box,
    useTheme
} from '@mui/material'

import './Cursor.css'
import styled from "styled-components"; //Файл отключает стандартный курсор везде

const {log} = console

/*
 Этот компонент добавляет кастомный курсор
 в виде HTML элемента, который следует за мышкой
* */
const Cursor: FC = () => {

    const [cursorParams, setCursorParams] = useState({
        X: 0,
        Y: 0,
        style: 'none',
    })

    const theme = useTheme()

    const isCursorVisible = theme.breakpoints.down('sm')

    const Styles = styled.div`
      
      mix-blend-mode: difference;
      position: fixed;
      z-index: 99;
      top: ${cursorParams.Y}px;
      left: ${cursorParams.X}px;
      width: 1.7vw;
      height: 1.7vw;
      border-radius: 50%;
      transition-property: transform, background, border;
      transition-duration: 400ms;
      pointer-events: none;

      background: ${cursorParams.style === 'pointer' ? 'none' : 'white'};

      transform: ${cursorParams.style === 'pointer'
              ? 'scale(1.6) translate(-50%, -50%)'
              : 'translate(-50%, -50%)'
      };
      
      border: ${cursorParams.style === 'pointer'
              ? '2px solid white'
              : 'none'
        
      };
      
      ${theme.breakpoints.down('sm')}{
        display: none;
      }
      

    `
    // const S_Cursor = styled(Box)({
    //
    //
    //
    //
    //
    //
    //
    //     // Убираем курсор на планшетах и телефонах
    //     [theme.breakpoints.down('sm')]: {
    //         display: 'none',
    //     },
    //
    // })

    function cursorMove() {

        // Позиционируем курсор по координатам мышки

        window.addEventListener('mousemove', (event: MouseEvent) => {

            setCursorParams(prevState => {

                return {...prevState, X: (event.clientX), Y: (event.clientY)}

            })

            // Меняем курсор при наведении на кликабельные элементы

            const target: any = event?.target

            const isTargetPointed = target.getAttribute('data-cursor-pointer')
                || target.tagName == 'A'
                || target.tagName == 'BUTTON'

            if (isTargetPointed) {

                setCursorParams(prevState => {

                    return {...prevState, style: 'pointer'}

                })

            } else {

                if (target.className !== 'Cursor') {

                    setCursorParams(prevState => {

                        return {...prevState, style: 'none'}

                    })

                }
            }
        })
    }

    useEffect(() => {

        if (isCursorVisible) {
            cursorMove()
        }

    }, [])


    return (
        <Box component={Styles} className={'Cursor'}/>
    )

}
export default Cursor