import * as React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import { getAPIDetails } from './action-creators'
import ShowCard from './ShowCard'
import InterfaceShow from './interfaces/Show'
import Header from './Header'
import Spinner from './Spinner'


class Details extends Component {
  public props: {
    rating: string,
    show: InterfaceShow,
    getAPIData: () => void
  }

  public componentDidMount() {
    // if we already have data then no need to load from the api
    if (this.props.rating === '') {
      this.props.getAPIData()
    }
  }

  public render() {
    const { title, year, poster, description, trailer } = this.props.show;
    let ratingComponent

    if (this.props.rating !== '') {
      ratingComponent = <h3>{this.props.rating}</h3>
    } else {
      ratingComponent = <Spinner />
    }

    return (
      <div className="details">
        <Header />
        <section>
          <h1>{title}</h1>
          <h2>({year})</h2>
          {ratingComponent}
          <img src={`/public/img/posters/${poster}`} />
          <p>
            {description}
          </p>
        </section>
        <div>
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${trailer}?rel=0&controls=0&showinfo=0`}
            frameBorder="0"
            allowFullScreen
            title={`Trailer for ${title}`}
          />
        </div>
        {/* <ShowCard {...props} /> */}
      </div>
    );
  }
}

const mapStateToProps = (state: {apiData: {[key: string]: InterfaceShow}}, ownProps: {show: InterfaceShow, rating: string}) => {
  // if we have the data in the state then just get what we already have, else no apiData
  const apiData = state.apiData[ownProps.show.imdbID] ? state.apiData[ownProps.show.imdbID] : {rating: ''}

  return {
    rating: apiData.rating
  }
}

const mapDispatchToProps = (dispatch: Function, ownProps: {show: InterfaceShow, rating: string}) => ({
  getAPIData() {
    dispatch(getAPIDetails(ownProps.show.imdbID))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Details)
