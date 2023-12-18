// yarn add prop-types
import PropTypes from 'prop-types';

export const FirstApp = ({ title, subTitle, name }) => {

  return (
    <>
      <h1>{ title }</h1>
      {/* { <code>{ JSON.stringify( newMessage ) }</code> } */}
      <p>{ subTitle }</p>

      <p>{ name }</p>
    </>
  )
}

FirstApp.PropTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

FirstApp.defaultProps = {
  title: 'No hay titulo',
  subTitle: 'No hay subtitulo',
  name: 'Aldayr Carbajal'
}