import * as React from 'react'
import axios from 'axios'
import { Component } from 'react'
import ShowCard from './ShowCard'
import InterfaceShow from './interfaces/Show'
import Header from './Header'
import Spinner from './Spinner'

interface InterfaceAPIResponse {
  data: {
    rating: string
  }
}

class Detailts extends Component {
  public props: InterfaceShow
  public state = {
    apiData: {
      rating: ''
    }
  }

  public componentDidMount() {
    axios.get(`http://localhost:3000/${this.props.imdbID}`)
      .then((response: InterfaceAPIResponse) => {
        this.setState(
          {apiData: {rating: response.data.rating} })
      });
  }

  public render() {
    const { title, year, poster, description, trailer } = this.props;
    let ratingComponent

    if (this.state.apiData.rating) {
      ratingComponent = <h3>{this.state.apiData.rating}</h3>
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
export default Detailts
