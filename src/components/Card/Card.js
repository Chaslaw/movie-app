import React from 'react'
import { img_300, unavailable } from '../../config/config'
import './Card.css'
import Badge from '@material-ui/core/Badge'
import ContentModal from '../ContentModal/ContentModal'

const Card = ({id, poster, title, date, media_type, vote}) => {
  return (
    <ContentModal media_type={media_type} id={id}>
      <Badge overlap="rectangular" badgeContent={vote} color={vote>6 ? 'primary' : 'secondary'}/>
        <img className='poster' src={poster ? `${img_300}/${poster}` : unavailable} alt={title} />
        <b className='title'>{title}</b>
        <span className="subTitle">
            {media_type === 'tv' ? "TV Series" : 'Movie'}
            <span className="subTitle">{date}</span>
        </span>
        </ContentModal>
  )
}

export default Card