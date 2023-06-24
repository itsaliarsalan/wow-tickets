import "swiper/css"
import "./Style.css"
import { Link } from "react-router-dom"
import Event from "../components/Event"
import { Container } from "@mui/material"
import { Swiper, SwiperSlide } from "swiper/react"
import { listEvents } from "../actions/eventActions"
import { useDispatch, useSelector } from "react-redux"
import React, { useEffect, useRef, useState } from "react"

function Events() {
  const dispatch = useDispatch()

  const eventList = useSelector((state) => state.eventList)
  const { loading, error, events } = eventList

  useEffect(() => {
    dispatch(listEvents({}))
  }, [dispatch])

  // Create instance of slider to further use methods
  const sliderRef = useRef(null)
  const [isFirst, setIsFirst] = useState(true)
  const [isEnd, setIsEnd] = useState(false)

  const handleControls = (direction) => {
    if (sliderRef.current) {
      const slider = sliderRef.current.swiper
      if (direction === "next") {
        slider.slideNext()
      }
      if (direction === "prev") {
        slider.slidePrev()
      }
      slider.isBeginning ? setIsFirst(true) : setIsFirst(false)
      slider.isEnd ? setIsEnd(true) : setIsEnd(false)
    }
  }
  return (
    <>
      <section className='events'>
        <Container>
          <h2 className='text-center mb-3'>Explore Events</h2>
          <div className='events-container'>
            <Swiper
              // ref={sliderRef}
              slidesPerView={1}
              spaceBetween={15}
              ref={sliderRef}
              breakpoints={{
                // when window width is >= 480px
                480: {
                  slidesPerView: 2,
                  spaceBetween: 5,
                },
                630: {
                  slidesPerView: 3,
                },
                992: {
                  slidesPerView: 4,
                },
                1200: {
                  slidesPerView: 5,
                },
              }}
              className='mySwiper'
            >
              {loading ? (
                <span>Loading events...</span>
              ) : error ? (
                <span>{error}</span>
              ) : (
                events?.map((event) => (
                  <SwiperSlide key={event?._id}>
                    <Event event={event} />
                  </SwiperSlide>
                ))
              )}
            </Swiper>
            <div className='carousel-controls'>
              <div
                className={isFirst ? "left btn hidden" : "left btn"}
                onClick={() => {
                  handleControls("prev")
                }}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='50'
                  height='50'
                  fill='currentColor'
                  className='bi bi-arrow-left-circle-fill'
                  viewBox='0 0 16 16'
                >
                  <path d='M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z' />{" "}
                  <path
                    fillRule='evenodd'
                    fill='#fff'
                    d='M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z'
                  />
                </svg>
              </div>
              <div
                className={isEnd ? "right btn hidden" : "right btn"}
                onClick={() => {
                  handleControls("next")
                }}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='50'
                  height='50'
                  fill='currentColor'
                  className='bi bi-arrow-right-circle-fill'
                  viewBox='0 0 16 16'
                >
                  <path
                    fill='#fff'
                    fillRule='evenodd'
                    d='M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z'
                  />
                  <path d='M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z' />
                </svg>
              </div>
            </div>
          </div>

          <div className='links'>
            <Link className='btn btn-main' to='/events'>
              View More
            </Link>
          </div>
        </Container>
      </section>
    </>
  )
}
export default Events
