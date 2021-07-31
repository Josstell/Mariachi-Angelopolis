import Image from 'next/image'
import { imageInicioFullUrl, toBase64, shimmer } from '../../helpers'
import styled from 'styled-components'
import Space from '../space'

const WrapperSectionFull = styled.div`
  /* display: flex;
  justify-content: ${(props) => props.justify};
  align-items: center; */
  position: relative;
  width: 100%;
  height: 80vh;
  /* You must set a specified height */
  /* background-image: url(${(props) => props.image}); */
  /* background-color: ${(props) => props.theme.whiteSmoke}; 
  background-position: center;
  background-repeat: repeat;
  background-size: cover; */
`

// const WrapperImage = styled.div`
//   position: absolute;
//   width: 100%;
//   height: 80vh;
//   right: 10%;
// `

const WrapperText = styled.div`
  position: relative;
  display: flex;
  justify-content: ${(props) => props.justify};
  align-items: center;
  width: 100%;
  height: 80vh;
`

const TextH2 = styled.h2`
  color: ${(props) => props.theme.whiteSmoke};
  text-align: center;
  font-size: 38px;
  font-weight: bold;
  padding-left: 22%;
  padding-right: 22%;
  z-index: 1000;
  @media only screen and (max-width: 600px) {
    font-size: 25px;
  }
`

const TextP = styled.p`
  position: relative;
  color: ${(props) => props.theme.whiteSmoke};
  width: 50%;
  text-align: center;
  font-size: 25px;
  font-family: 'Helvetica Neue';
  font-weight: bold;
  margin: 0;
  padding-left: 5vw;
  padding-right: 5vw;
  @media only screen and (max-width: 768px) {
    font-size: 20px;
    width: 65%;
    text-align: left;
    padding-left: 10vw;
    padding-top: 15%;
  }
  @media only screen and (max-width: 600px) {
    background-color: rgba(0, 0, 0, 0.7);
    width: 100%;
    height: 100%;
    font-size: 25px;

    text-align: left;
    padding-left: 10vw;
    padding-top: 50%;
  }
`

const WrapperImageMove = styled.div`
  div > img {
    object-position: 0px;
  }

  @media only screen and (max-width: 600px) {
    div > img {
      object-position: 90% bottom;
    }
  }
`

const SectionFull = ({ data }) => {
  const sectOne = data[0]
  const sectTwo = data[1]

  return (
    <>
      <WrapperSectionFull
      // image="https://drive.google.com/uc?id=168t_dQ7AhEOn_Rgn64AIrrcydvBXE6il"
      >
        <Image
          loader={imageInicioFullUrl}
          src={sectOne.backgroundImage.url}
          alt={sectOne.backgroundImage.name}
          layout="fill"
          objectFit="cover"
          quality={10}
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(
            shimmer('100%', '100%')
          )}`}
        />
        <WrapperText>
          <TextH2>{sectOne.text}</TextH2>
        </WrapperText>
      </WrapperSectionFull>
      <Space />

      <WrapperSectionFull
      // image="https://drive.google.com/uc?id=1Vae2BZLrgoMcJCX8RUov8nhlBcf6Yaho"
      >
        <WrapperImageMove>
          <Image
            loader={imageInicioFullUrl}
            src={sectTwo.backgroundImage.url}
            alt={sectTwo.backgroundImage.name}
            layout="fill"
            objectFit="cover"
            quality={10}
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              shimmer('100%', '100%')
            )}`}
          />
        </WrapperImageMove>
        <WrapperText>
          <TextP>{sectTwo.text}</TextP>
        </WrapperText>
      </WrapperSectionFull>
    </>
  )
}

export default SectionFull
