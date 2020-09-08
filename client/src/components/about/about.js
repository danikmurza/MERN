import React from 'react'

import team1 from '../css/img/team/01.jpg'
import team2 from '../css/img/team/02.jpg'
import team3 from '../css/img/team/03.jpg'
import team4 from '../css/img/team/04.jpg'
import team6 from '../css/img/team/06.jpg'
import team7 from '../css/img/team/07.jpg'
import about1 from '../css/img/about/01.jpg'
import about2 from '../css/img/about/02.jpg'
import about3 from '../css/img/about/03.jpg'
import about4 from '../css/img/about/04.jpg'
import about5 from '../css/img/about/05.jpg'


export const AboutPage = () => {
  
  return (
    <main className="container-fluid px-0">
      {/* Row: Shop online*/}
      <section className="row no-gutters">
        <div
          className="col-md-6 bg-position-center bg-size-cover bg-secondary"
          style={{minHeight: "15rem", backgroundImage: `url(${about1})`}}
        />
        <div className="col-md-6 px-3 px-md-5 py-5">
          <div className="mx-auto py-lg-5" style={{maxWidth: "35rem"}}>
            <h2 className="h3 pb-3">Search, Select, Buy online</h2>
            <p className="font-size-sm pb-3 text-muted">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              id
              purus at risus pellentesque faucibus a quis eros. In eu fermentum
              leo.
              Integer ut eros lacus. Proin ut accumsan leo. Morbi vitae est eget
              dolor consequat aliquam eget quis dolor. Mauris rutrum fermentum
              erat,
              at euismod lorem pharetra nec. Duis erat lectus, ultrices euismod
              sagittis at, pharetra eu nisl. Phasellus id ante at velit
              tincidunt
              hendrerit. Aenean dolor dolor tristique nec. Tristique nulla
              aliquet
              enim tortor at auctor urna nunc. Sit amet aliquam id diam maecenas
              ultricies mi eget.
            </p>
            <a className="btn btn-primary btn-shadow" href="/">
              View products
            </a>
          </div>
        </div>
      </section>
      {/* Row: Delivery*/}
      <section className="row no-gutters">
        <div
          className="col-md-6 bg-position-center bg-size-cover bg-secondary order-md-2"
          style={{minHeight: "15rem", backgroundImage: `url(${about2})`}}
        />
        <div className="col-md-6 px-3 px-md-5 py-5 order-md-1">
          <div className="mx-auto py-lg-5" style={{maxWidth: "35rem"}}>
            <h2 className="h3 pb-3">Fast delivery worldwide</h2>
            <p className="font-size-sm pb-3 text-muted">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              id
              purus at risus pellentesque faucibus a quis eros. In eu fermentum
              leo.
              Integer ut eros lacus. Proin ut accumsan leo. Morbi vitae est eget
              dolor consequat aliquam eget quis dolor. Mauris rutrum fermentum
              erat,
              at euismod lorem pharetra nec. Duis erat lectus, ultrices euismod
              sagittis at, pharetra eu nisl. Phasellus id ante at velit
              tincidunt
              hendrerit. Aenean dolor dolor tristique nec. Tristique nulla
              aliquet
              enim tortor at auctor urna nunc. Sit amet aliquam id diam maecenas
              ultricies mi eget.
            </p>
            <a className="btn btn-accent btn-shadow" href="/">
              Shipping details
            </a>
          </div>
        </div>
      </section>
      {/* Row: Mobile app*/}
      <section className="row no-gutters">
        <div
          className="col-md-6 bg-position-center bg-size-cover bg-secondary"
          style={{minHeight: "15rem", backgroundImage: `url(${about3})`}}
        />
        <div className="col-md-6 px-3 px-md-5 py-5">
          <div className="mx-auto py-lg-5" style={{maxWidth: "35rem"}}>
            <h2 className="h3 pb-3">Great mobile app. Shop on the go</h2>
            <p className="font-size-sm pb-3 text-muted">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              id
              purus at risus pellentesque faucibus a quis eros. In eu fermentum
              leo.
              Integer ut eros lacus. Proin ut accumsan leo. Morbi vitae est eget
              dolor consequat aliquam eget quis dolor. Mauris rutrum fermentum
              erat,
              at euismod. Duis erat lectus, ultrices euismod sagittis at dolor
              tristique nec. Tristique nulla aliquet enim tortor at auctor urna
              nunc. Sit amet aliquam id diam maecenas ultricies mi eget.
            </p>
            <a className="btn-market btn-apple mr-3 mb-3" href="/"
               role="button">
              <span className="btn-market-subtitle">Download on the</span>
              <span className="btn-market-title">App Store</span>
            </a>
            <a className="btn-market btn-google mb-3" href="/" role="button">
              <span className="btn-market-subtitle">Download on the</span>
              <span className="btn-market-title">Google Play</span>
            </a>
          </div>
        </div>
      </section>
      {/* Section: Shopping outlets*/}
      <section className="row no-gutters">
        <div
          className="col-md-6 bg-position-center bg-size-cover bg-secondary order-md-2"
          style={{minHeight: "15rem", backgroundImage: `url(${about4})`}}
        />
        <div className="col-md-6 px-3 px-md-5 py-5 order-md-1">
          <div className="mx-auto py-lg-5" style={{maxWidth: "35rem"}}>
            <h2 className="h3 pb-3">Shop offline. Cozy outlet stores</h2>
            <p className="font-size-sm pb-3 text-muted">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              id
              purus at risus pellentesque faucibus a quis eros. In eu fermentum
              leo.
              Integer ut eros lacus. Proin ut accumsan leo. Morbi vitae est eget
              dolor consequat aliquam eget quis dolor. Mauris rutrum fermentum
              erat,
              at euismod lorem pharetra nec. Duis erat lectus, ultrices euismod
              sagittis at, pharetra eu nisl. Phasellus id ante at velit
              tincidunt
              hendrerit. Aenean dolor dolor tristique nec. Tristique nulla
              aliquet
              enim tortor at auctor urna nunc. Sit amet aliquam id diam maecenas
              ultricies mi eget.
            </p>
            <a className="btn btn-warning btn-shadow" href="/">
              See outlet stores
            </a>
          </div>
        </div>
      </section>
      <hr/>
      {/* Section: Team*/}
      <section className="container py-3 py-lg-5 mt-4 mb-3">
        <h2 className="h3 my-2">Our core team</h2>
        <p className="font-size-sm text-muted">
          People behind your great shopping experience
        </p>
        <div className="row pt-3">
          <div className="col-lg-4 col-sm-6 mb-grid-gutter">
            <div className="media align-items-center">
              <img
                className="d-inline-block rounded-circle"
                src={team3}
                width={96}
                alt="Jonathan Doe"
              />
              <div className="media-body pl-3">
                <h6 className="font-size-base pt-1 mb-1">Jonathan Doe</h6>
                <p className="font-size-ms text-muted mb-0">CEO, Co-founder</p>
                <a
                  className="nav-link-style font-size-ms text-nowrap"
                  href="mailto:johndoe@example.com"
                >
                  <i className="czi-mail mr-2"/>
                  johndoe@example.com
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mb-grid-gutter">
            <div className="media align-items-center">
              <img
                className="d-inline-block rounded-circle"
                src={team4}
                width={96}
                alt="Barbara Palson"
              />
              <div className="media-body pl-3">
                <h6 className="font-size-base pt-1 mb-1">Barbara Palson</h6>
                <p className="font-size-ms text-muted mb-0">Chief of
                  Marketing</p>
                <a
                  className="nav-link-style font-size-ms text-nowrap"
                  href="mailto:b.palson@example.com"
                >
                  <i className="czi-mail mr-2"/>
                  b.palson@example.com
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mb-grid-gutter">
            <div className="media align-items-center">
              <img
                className="d-inline-block rounded-circle"
                src={team6}
                width={96}
                alt="William Smith"
              />
              <div className="media-body pl-3">
                <h6 className="font-size-base pt-1 mb-1">William Smith</h6>
                <p className="font-size-ms text-muted mb-0">Financial
                  director</p>
                <a
                  className="nav-link-style font-size-ms text-nowrap"
                  href="mailto:w.smith@example.com"
                >
                  <i className="czi-mail mr-2"/>
                  w.smith@example.com
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mb-grid-gutter">
            <div className="media align-items-center">
              <img
                className="d-inline-block rounded-circle"
                src={team2}
                width={96}
                alt="Amanda Gallaher"
              />
              <div className="media-body pl-3">
                <h6 className="font-size-base pt-1 mb-1">Amanda Gallaher</h6>
                <p className="font-size-ms text-muted mb-0">Lead UX designer</p>
                <a
                  className="nav-link-style font-size-ms text-nowrap"
                  href="mailto:a.gallaher@example.com"
                >
                  <i className="czi-mail mr-2"/>
                  a.gallaher@example.com
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mb-grid-gutter">
            <div className="media align-items-center">
              <img
                className="d-inline-block rounded-circle"
                src={team1}
                width={96}
                alt="Benjamin Miller"
              />
              <div className="media-body pl-3">
                <h6 className="font-size-base pt-1 mb-1">Benjamin Miller</h6>
                <p className="font-size-ms text-muted mb-0">Website
                  development</p>
                <a
                  className="nav-link-style font-size-ms text-nowrap"
                  href="mailto:b.miller@example.com"
                >
                  <i className="czi-mail mr-2"/>
                  b.miller@example.com
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mb-grid-gutter">
            <div className="media align-items-center">
              <img
                className="d-inline-block rounded-circle"
                src={team7}
                width={96}
                alt="Miguel Rodrigez"
              />
              <div className="media-body pl-3">
                <h6 className="font-size-base pt-1 mb-1">Miguel Rodrigez</h6>
                <p className="font-size-ms text-muted mb-0">Content manager</p>
                <a
                  className="nav-link-style font-size-ms text-nowrap"
                  href="mailto:b.miller@example.com"
                >
                  <i className="czi-mail mr-2"/>
                  m.rodrigez@example.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section: We are hiring*/}
      <hr/>
      <section className="row no-gutters">
        <div
          className="col-md-6 bg-position-center bg-size-cover bg-secondary order-md-2"
          style={{minHeight: "15rem", backgroundImage: `url(${about5})`}}
        />
        <div className="col-md-6 px-3 px-md-5 py-5 order-md-1">
          <div className="mx-auto py-lg-5" style={{maxWidth: "35rem"}}>
            <h2 className="h3 mb-2">We are hiring new talents</h2>
            <p className="font-size-sm text-muted pb-2">
              If you want to be part of our team please submit you CV using the
              form
              below:
            </p>
            <form className="needs-validation row" method="post" noValidate>
              <div className="col-sm-6 form-group">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="col-sm-6 form-group">
                <input
                  className="form-control"
                  type="email"
                  placeholder="Your email"
                  required
                />
              </div>
              <div className="col-12 form-group">
            <textarea
              className="form-control"
              rows={4}
              placeholder="Message"
              defaultValue={""}
            />
              </div>
              <div className="col-12 form-group">
                <div className="custom-file">
                  <input
                    className="custom-file-input"
                    type="file"
                    id="file-input"
                  />
                  <label className="custom-file-label" htmlFor="file-input">
                    Choose file...
                  </label>
                </div>
              </div>
              <div className="col-12">
                <button className="btn btn-info btn-shadow" type="submit">
                  Submit your CV
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
  
}
