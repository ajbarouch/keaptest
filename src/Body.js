import React from 'react';
import First from './First';
import Second from './Second';

import ButtonSwitch from './ButtonSwitch';
import Form from './Form';
import Hero from './Hero';

class Body extends React.Component {

  constructor(props) {
    super(props)
    this.state = { isEmptyState: true }
  }

  triggerSwitchState = () => {
    var switchButton = document.getElementById("toggleButtonContainer");
    switchButton.style.display = "none";
    this.setState({
      ...this.state,
      isEmptyState: false,
      isSwitchState: true
    })
  }
    render() {
    return (
        <div>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="csrf-token" content="EULtme6iGIRSOtl7xAwN9XhZm80AwXIYupGdPJVx" />
        <title>Grow Your Business - Keap CRM &amp; Marketing Automation</title>
        <meta name="description" content="Keap helps you grow your business, improve customer service & increase sales. Choose the right package to fit your business or start a free trial now." />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href="https://keap.com" />
        <meta property="og:title" content="Grow Your Business - Keap CRM & Marketing Automation" />
        <meta property="og:description" content="Keap helps you grow your business, improve customer service & increase sales. Choose the right package to fit your business or start a free trial now." />
        <meta property="og:image" content="https://keap.com/android-chrome-512x512.png" />
        <link rel="apple-touch-icon" sizes="192x192" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" type="image/png" href="/favicon-16x16.png" sizes="16x16" />
        <link rel="icon" type="image/png" href="/android-chrome-512x512.png" sizes="512x512" />
        <link rel="icon" type="image/png" href="/android-chrome-256x256.png" sizes="256x256" />
        <link rel="icon" type="image/png" href="/android-chrome-192x192.png" sizes="192x192" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/mstile-150x150.png" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="preconnect" href="https://keap.com" />
        <link rel="preconnect" href="//assets.keap.com" />
        <link rel="preconnect" href="//pages.keap.com" />
        <link rel="preconnect" href="//tags.tiqcdn.com" />
        <link rel="preconnect" href="https://collect.tealiumiq.com" />
        <link rel="preconnect" href="https://www.google.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://munchkin.marketo.net" />
        <link rel="preconnect" href="https://www.facebook.com" />
        <link rel="preconnect" href="https://connect.facebook.net" />
        <link rel="preconnect" href="//pixel.quantserve.com" />
        <link rel="stylesheet" href="/css/keap/global.css?id=84b49a668cefc39d5a42" />
        <link rel="stylesheet" href="/css/keap/pages/homepage.css?id=55b5aa2b0435bf8b0336" />
        <link rel="stylesheet" href="/css/keap/pages/keep-going.css?id=89f4ad52aed084e7181b" />
        <style dangerouslySetInnerHTML={{__html: "#mktoStyleLoaded{background-color:#123456}" }} />
        {/* TEALIUM UDO */}
        {/* /OPTIMIZELY */}
        <div style={{display: 'none'}} aria-hidden="true">
        </div>
        <div className="main-nav">
          <nav className="primary-nav">
            <div className="primary-nav__inner">
              <div className="primary-nav__logo no-text-spacing">
                <a href="https://keap.com" data-event-label="Keap logo">
                  <svg xmlns="http://www.w3.org/2000/svg" width={87} height={40} viewBox="0 0 87 40" fill="none" preserveAspectRatio="xMinYMid slice">
                    <path d="M20.3 28.1L17.5 31C17.1 31.5 16.5 31.4 16 31L6.1 20.9V30.3C6.1 30.9 5.7 31.3 5 31.3H1C0.4 31.3 0 30.9 0 30.3V1C0 0.4 0.4 0 1 0H5C5.7 0 6.1 0.4 6.1 1V10.6H19.6C20.2 10.6 20.6 11 20.6 11.6V15.7C20.6 16.3 20.2 16.7 19.6 16.7H10.4L20.3 26.7C20.7 27.1 20.7 27.6 20.3 28.1Z" fill="#36A635" />
                    <path className="large-nav-only" d="M42.5 20.9C42.5 21.3 42.4 21.8 42.4 22.2 42.3 22.8 41.9 23.1 41.3 23.1H27.9C28.6 24.9 30.3 26.1 32.6 26.1 34.1 26.1 35.4 25.5 36.3 24.5 36.7 24 37.1 23.9 37.7 24.2L40.8 26.1C41.3 26.5 41.5 27 41.1 27.5 39.2 30.1 36.1 31.7 32.5 31.7 26.3 31.7 21.8 27.1 21.8 21 21.8 14.8 26.1 10.1 32.1 10.1 38.3 10.1 42.5 14.7 42.5 20.9ZM36.5 18.7C35.9 16.8 34.3 15.7 32.2 15.7 29.9 15.7 28.3 16.8 27.8 18.7H36.5Z" fill="#36A635" />
                    <path className="large-nav-only" d="M62.7 18.3V30.3C62.7 30.9 62.4 31.3 61.7 31.3H57.8C57.2 31.3 56.8 30.9 56.8 30.3V29.1C55.2 30.9 53.4 31.7 51.1 31.7 46.6 31.7 43.6 29.2 43.6 25.3 43.6 21.2 46.6 18.6 51 18.6H56.8V18.1C56.8 16.7 55.4 15.7 53.4 15.7 52.1 15.7 50.8 16.2 50.2 16.9 49.8 17.3 49.6 17.6 49 17.6H45.2C44.5 17.6 44.1 17.2 44.2 16.6 45 12.7 48.3 10.1 53.3 10.1 59 10.1 62.7 13.4 62.7 18.3ZM56.8 23.6V22.9H51.9C50.3 22.9 49.6 23.8 49.6 24.9 49.6 26 50.5 26.9 52.6 26.9 55.1 26.9 56.8 25.5 56.8 23.6Z" fill="#36A635" />
                    <path className="large-nav-only" d="M86.5 21C86.5 27 82.3 31.7 76.7 31.7 74.4 31.7 72.4 30.9 71.2 29.4V39C71.2 39.6 70.8 40 70.1 40H66.1C65.5 40 65.1 39.6 65.1 39V11.6C65.1 11 65.5 10.6 66.1 10.6H70C70.7 10.6 71 11 71 11.6V12.8C72.3 11.1 74.3 10.1 76.6 10.1 82.2 10.1 86.5 14.9 86.5 21ZM80.4 21C80.4 18.2 78.5 16.1 75.8 16.1 72.9 16.1 70.9 18.2 70.9 21 70.9 23.7 72.9 25.8 75.8 25.8 78.5 25.8 80.4 23.7 80.4 21Z" fill="#36A635" />
                  </svg>
                </a>
              </div>
              <div className="primary-nav__phone hide-for-medium"> <a href="tel:+18668000004" className="link green" data-event-label="+1 866 800 0004">+1 866 800 0004</a> </div>
              <div className="primary-nav__menu-wrapper primary-nav__menu-wrapper--left show-for-medium">
                <ul className="primary-nav__menu no-bullets subnav-open-right">
                  <li className="primary-nav__menu-item has-subnav">
                    <span className="menu-item-title">Products</span>    
                    <div className="primary-nav__subnav" data-subnav-title="products">
                      <ul className="no-bullets links-no-underline">
                        <li>
                          <a href="https://keap.com/keap-grow" data-event-label="Products > Keap Grow">
                            <p className="title small margin-bottom-0">Keap Grow</p>
                            <p className="subtitle xxxsmall margin-bottom-0">Stay organized and deliver service that wins more customers</p>
                          </a>
                        </li>
                        <li>
                          <a href="https://keap.com/keap-pro" data-event-label="Products > Keap Pro">
                            <p className="title small margin-bottom-0">Keap Pro</p>
                            <p className="subtitle xxxsmall margin-bottom-0">Build your business with repeatable sales processes and strong marketing campaigns</p>
                          </a>
                        </li>
                        <li>
                          <a href="https://keap.com/infusionsoft" data-event-label="Products > Infusionsoft">
                            <p className="title small margin-bottom-0">Infusionsoft</p>
                            <p className="subtitle xxxsmall margin-bottom-0">Wow your clients with an all-in-one marketing and sales automation solution</p>
                          </a>
                        </li>
                      </ul>
                      <div className="primary-nav__subnav-link"> <a href="https://keap.com/why-keap" className="link green arrow right" data-event-label="Products > Why Keap?">Why Keap?</a> </div>
                    </div>
                  </li>
                  <li className="primary-nav__menu-item has-subnav">
                    <span className="menu-item-title">Features</span>    
                    <div className="primary-nav__subnav" data-subnav-title="features">
                      <ul className="no-bullets links-no-underline">
                        <li>
                          <a href="https://keap.com/features/client-management" data-event-label="Features > CRM (Client management)">
                            <p className="title small margin-bottom-0">CRM (Client management)</p>
                          </a>
                        </li>
                        <li>
                          <a href="https://keap.com/features/messages" data-event-label="Features > Messages">
                            <p className="title small margin-bottom-0">Messages</p>
                          </a>
                        </li>
                        <li>
                          <a href="https://keap.com/features/appointments" data-event-label="Features > Appointments">
                            <p className="title small margin-bottom-0">Appointments</p>
                          </a>
                        </li>
                        <li>
                          <a href="https://keap.com/features/sales-pipeline" data-event-label="Features > Sales Pipeline">
                            <p className="title small margin-bottom-0">Sales Pipeline</p>
                          </a>
                        </li>
                        <li>
                          <a href="https://keap.com/features/automation" data-event-label="Features > Marketing Automation">
                            <p className="title small margin-bottom-0">Marketing Automation</p>
                          </a>
                        </li>
                        <li>
                          <a href="https://keap.com/features/invoices-payments" data-event-label="Features > Invoices & Payments">
                            <p className="title small margin-bottom-0">Invoices &amp; Payments</p>
                          </a>
                        </li>
                      </ul>
                      <div className="primary-nav__subnav-link"> <a href="https://keap.com/features" className="link green arrow right" data-event-label="Features > More">More</a> </div>
                    </div>
                  </li>
                  <li className="primary-nav__menu-item ">  <a href="https://keap.com/pricing" data-event-label="Pricing">Pricing</a> </li>
                  <li className="primary-nav__menu-item has-subnav grouped-nav">
                    <span className="menu-item-title">Interesting stuff</span>    
                    <div className="primary-nav__subnav-wrapper">
                      <div className="primary-nav__subnav" data-subnav-title="interesting-stuff">
                        <div className="grid-x grid-padding-x">
                          <div className="cell large-2 align-self-stretch text-center bkgd-green-light grouped-nav__overview">
                            <noscript className="noscript-image">&lt;img class="" src="//assets.keap.com/image/upload/c_scale,dpr_2,f_auto,q_95,w_0.33/v1567621263/keap/icons/we-learn-always.png"&gt;</noscript>
                            <img className="lazyload" src="//assets.keap.com/image/upload/c_scale,dpr_1,f_auto,q_95,w_0.33/v1567621263/keap/icons/we-learn-always.png" srcSet="//assets.keap.com/image/upload/c_scale,dpr_1,f_auto,q_5,w_0.33/v1567621263/keap/icons/we-learn-always.png" data-srcset="//assets.keap.com/image/upload/c_scale,dpr_1,f_auto,q_95,w_0.33/v1567621263/keap/icons/we-learn-always.png 1x, //assets.keap.com/image/upload/c_scale,dpr_2,f_auto,q_95,w_0.33/v1567621263/keap/icons/we-learn-always.png 2x, //assets.keap.com/image/upload/c_scale,dpr_3,f_auto,q_95,w_0.33/v1567621263/keap/icons/we-learn-always.png 3x" alt="Icon cartoon of a shining lightbuld raising their hand." data-sizes="auto" /> 
                            <p className="margin-bottom-0"><a href="https://keap.com/resources" className="link green arrow">Overview</a></p>
                          </div>
                          <div className="cell auto grouped-nav__groups">
                            <div className="grid-x grid-padding-x">
                              <div className="cell auto">
                                <p className="xxsmall txt-grey-70 txt-mono">Blogs &amp; Content</p>
                                <ul className="no-bullets links-no-underline">
                                  <li className>
                                    <a href="https://keap.com/business-success-blog" data-event-label="Marketing blog > Marketing blog">
                                      <p className="title small margin-bottom-0">Marketing blog</p>
                                    </a>
                                  </li>
                                  <li className>
                                    <a href="https://keap.com/product-updates" data-event-label="Product blog > Product blog">
                                      <p className="title small margin-bottom-0">Product blog</p>
                                    </a>
                                  </li>
                                  <li className>
                                    <a href="https://keap.com/resources/podcasts" data-event-label="Podcasts > Podcasts">
                                      <p className="title small margin-bottom-0">Podcasts</p>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="cell auto">
                                <p className="xxsmall txt-grey-70 txt-mono">Resource</p>
                                <ul className="no-bullets links-no-underline">
                                  <li className="grouped-nav__bug">
                                    <a href="https://keap.com/lifecycle-marketing/assessment" data-event-label="Lifecycle Marketing > Lifecycle Marketing">
                                      <p className="title small margin-bottom-0">
                                        Lifecycle Marketing
                                        <span className="bug">
                                          New
                                        </span></p>
                                    </a>
                                  </li>
                                  <li className> <a href="https://keap.com/resources/tools" data-event-label="Tools > Tools"> <p className="title small margin-bottom-0">Tools</p></a> </li>  <li className> <a href="https://keap.com/resources/guides" data-event-label="Guides > Guides"> <p className="title small margin-bottom-0">Guides</p></a> </li>  <li className> <a href="https://keap.com/customer-stories" data-event-label="Success stories > Success stories"> <p className="title small margin-bottom-0">Success stories</p></a> </li>  
                                </ul>
                              </div>
                              <div className="cell auto"> <p className="xxsmall txt-grey-70 txt-mono">Event</p> <ul className="no-bullets links-no-underline">  <li className> <a href="https://keap.com/customer-webinars" data-event-label="Customer Webinars > Customer Webinars"> <p className="title small margin-bottom-0">Customer Webinars</p></a> </li>  <li className> <a href="https://keap.com/resources/webinars" data-event-label="Resource Webinars > Resource Webinars"> <p className="title small margin-bottom-0">Resource Webinars</p></a> </li>  <li className> <a href="https://pages.keap.com/keap-live-demo-registration.html" data-event-label="Live demo > Live demo"> <p className="title small margin-bottom-0">Live demo</p></a> </li>  <li className> <a href="https://keap.com/resources/events" data-event-label="Events > Events"> <p className="title small margin-bottom-0">Events</p></a> </li></ul> </div>  <div className="cell auto"> <p className="xxsmall txt-grey-70 txt-mono">Help &amp; Support</p> <ul className="no-bullets links-no-underline">  <li className="grouped-nav__bug"> <a href="https://keap.com/whats-new" data-event-label="What's new > What's new"> <p className="title small margin-bottom-0">What's new<span className="bug">New</span></p></a> </li>  <li className> <a href="https://community.infusionsoft.com" data-event-label="User community > User community"> <p className="title small margin-bottom-0">User community</p></a> </li>  <li className> <a href="https://keap.com/help" data-event-label="Help center > Help center"> <p className="title small margin-bottom-0">Help center</p></a> </li>  <li className> <a href="https://help.keap.com/help/contact-support" data-event-label="Customer support > Customer support"> <p className="title small margin-bottom-0">Customer support</p></a> </li></ul> </div>  
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="primary-nav__menu-wrapper primary-nav__menu-wrapper--right show-for-medium">
                <ul className="primary-nav__menu no-bullets subnav-open-left">
                  <li className="primary-nav__menu-item phone"> <span>+1 866 800 0004</span> </li>
                  <li className="primary-nav__menu-item has-subnav">
                    <span className="menu-item-title">More</span>    
                    <div className="primary-nav__subnav" data-subnav-title="more">
                      <ul className="no-bullets links-no-underline">
                        <li>
                          <a href="https://keap.com/about" data-event-label="More > About">
                            <p className="title small margin-bottom-0">About</p>
                          </a>
                        </li>
                        <li>
                          <a href="https://keap.com/about/careers" data-event-label="More > Careers">
                            <p className="title small margin-bottom-0">Careers</p>
                          </a>
                        </li>
                        <li>
                          <a href="https://marketplace.infusionsoft.com/search?listingTypes=Service&certified=true" data-event-label="More > Find a partner">
                            <p className="title small margin-bottom-0">Find a partner</p>
                          </a>
                        </li>
                        <li>
                          <a href="https://keap.com/partners" data-event-label="More > Become a partner">
                            <p className="title small margin-bottom-0">Become a partner</p>
                          </a>
                        </li>
                        <li>
                          <a href="https://keap.com/lp/franchise" data-event-label="More > For franchises">
                            <p className="title small margin-bottom-0">For franchises</p>
                          </a>
                        </li>
                        <li>
                          <a href="https://marketplace.infusionsoft.com" data-event-label="More > Marketplace">
                            <p className="title small margin-bottom-0">Marketplace</p>
                          </a>
                        </li>
                        <li>
                          <a href="https://keap.com/contact" data-event-label="More > Contact us">
                            <p className="title small margin-bottom-0">Contact us</p>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
                <a href="https://signin.infusionsoft.com/login" className="button hollow tiny btn-login" data-event-label="Log in">Login</a> <a href="https://keap.com/product-demo" className="button tiny btn-demo" data-event-label="See demo">See demo</a> 
              </div>
              <div className="primary-nav__hamburger no-text-spacing clickable">
                <svg xmlns="http://www.w3.org/2000/svg" width={26} height={20} viewBox="0 0 26 20" fill="none">
                  <rect width={26} height={4} fill="#0C0B0B" />
                  <rect y={8} width={26} height={4} fill="#0C0B0B" />
                  <rect y={16} width={26} height={4} fill="#0C0B0B" />
                </svg>
              </div>
            </div>
          </nav>
          <nav className="primary-nav--mobile">
            <div className="grid-x grid-padding-x">
              <div className="cell">
                <div className="primary-nav--mobile__inner rounded--clip bkgd-white">
                  <div className="primary-nav--mobile__close no-text-spacing center-content clickable"> <i className="icon-close" /> </div>
                  <div className="primary-nav--mobile__slide" data-slide-id="main">
                    <div className="primary-nav--mobile__slide-header">
                      <a href="https://keap.com" data-event-label="Keap logo (Mobile)">
                        <svg xmlns="http://www.w3.org/2000/svg" width={48} height={23} viewBox="0 0 48 23" fill="none">
                          <path d="M11.3 15.6L9.7 17.2C9.5 17.5 9.1 17.4 8.9 17.2L3.4 11.6V16.8C3.4 17.2 3.2 17.4 2.8 17.4H0.6C0.2 17.4 0 17.2 0 16.8V0.6C0 0.2 0.2 0 0.6 0H2.8C3.2 0 3.4 0.2 3.4 0.6V5.9H10.9C11.2 5.9 11.4 6.1 11.4 6.5V8.7C11.4 9.1 11.2 9.3 10.9 9.3H5.8L11.3 14.8C11.5 15 11.5 15.3 11.3 15.6ZM23.6 11.6C23.6 11.8 23.6 12.1 23.5 12.3 23.5 12.7 23.3 12.8 22.9 12.8H15.5C15.9 13.8 16.8 14.5 18.1 14.5 19 14.5 19.6 14.2 20.1 13.6 20.4 13.3 20.6 13.3 20.9 13.4L22.6 14.5C22.9 14.7 23 15 22.8 15.3 21.8 16.7 20 17.6 18 17.6 14.6 17.6 12.1 15 12.1 11.6 12.1 8.2 14.5 5.6 17.8 5.6 21.2 5.6 23.6 8.2 23.6 11.6ZM20.3 10.4C19.9 9.3 19 8.7 17.9 8.7 16.6 8.7 15.7 9.3 15.4 10.4H20.3ZM34.8 10.2V16.8C34.8 17.2 34.6 17.4 34.2 17.4H32.1C31.7 17.4 31.5 17.2 31.5 16.8V16.1C30.7 17.2 29.6 17.6 28.4 17.6 25.9 17.6 24.2 16.2 24.2 14 24.2 11.8 25.9 10.3 28.3 10.3H31.5V10.1C31.5 9.3 30.8 8.7 29.6 8.7 28.9 8.7 28.2 9 27.9 9.4 27.7 9.6 27.5 9.8 27.2 9.8H25.1C24.7 9.8 24.5 9.6 24.5 9.2 25 7.1 26.8 5.6 29.6 5.6 32.7 5.6 34.8 7.5 34.8 10.2ZM31.5 13.1V12.7H28.8C27.9 12.7 27.6 13.2 27.6 13.8 27.6 14.4 28 14.9 29.2 14.9 30.6 14.9 31.5 14.2 31.5 13.1ZM48 11.6C48 15 45.7 17.6 42.6 17.6 41.3 17.6 40.2 17.1 39.5 16.3V21.6C39.5 22 39.3 22.2 38.9 22.2H36.7C36.3 22.2 36.1 22 36.1 21.6V6.4C36.1 6.1 36.3 5.9 36.7 5.9H38.9C39.2 5.9 39.4 6.1 39.4 6.4V7.1C40.1 6.2 41.3 5.6 42.5 5.6 45.6 5.6 48 8.3 48 11.6ZM44.6 11.6C44.6 10.1 43.6 8.9 42.1 8.9 40.5 8.9 39.4 10.1 39.4 11.6 39.4 13.2 40.5 14.3 42.1 14.3 43.6 14.3 44.6 13.2 44.6 11.6Z" fill="#36A635" />
                        </svg>
                      </a>
                    </div>
                    <div className="primary-nav--mobile__scroll-section">
                      <ul className="no-bullets links-no-underline">
                        <li className="has-subnav"> <a href="https://keap.com/why-keap" data-event-label="Products (Mobile)" data-subnav-target="products"> <span>Products</span> </a> </li>
                        <li className="has-subnav"> <a href="https://keap.com/features" data-event-label="Features (Mobile)" data-subnav-target="features"> <span>Features</span> </a> </li>
                        <li className> <a href="https://keap.com/pricing" data-event-label="Pricing (Mobile)" data-subnav-target="pricing"> <span>Pricing</span> </a> </li>
                        <li className="has-subnav grouped-nav"> <a href="https://keap.com/resources" data-event-label="Interesting stuff (Mobile)" data-subnav-target="interesting-stuff"> <span>Interesting stuff</span> </a> </li>
                        <li className="has-subnav"> <a href="#" data-event-label="More (Mobile)" data-subnav-target="more"> <span>More</span> </a> </li>
                        <li> <a href="https://signin.infusionsoft.com/login" data-event-label="Log in (Mobile)"> <span>Login</span> </a> </li>
                      </ul>
                      <div className="text-center"> <a href="https://keap.com/product-demo" className="button" data-event-label="See demo (Mobile)">See demo</a> </div>
                      <div className="text-center"> <a href="tel:+18668000004" className="link green" data-event-label="+1 866 800 0004 (Mobile)">+1 866 800 0004</a> </div>
                    </div>
                  </div>
                  <div className="primary-nav--mobile__slide" data-slide-id="products">
                    <div className="primary-nav--mobile__slide-header">
                      <i className="back-button icon-arrow-back" data-subnav-target="main" /> 
                      <p className="small txt-medium margin-bottom-0">Products</p>
                    </div>
                    <div className="primary-nav--mobile__scroll-section has-overview-link">
                      <ul className="subnav no-bullets links-no-underline margin-bottom-0">
                        <li> <a href="https://keap.com/keap-grow" data-event-label="Products > Keap Grow (Mobile)"> <span>Keap Grow</span> </a> </li>
                        <li> <a href="https://keap.com/keap-pro" data-event-label="Products > Keap Pro (Mobile)"> <span>Keap Pro</span> </a> </li>
                        <li> <a href="https://keap.com/infusionsoft" data-event-label="Products > Infusionsoft (Mobile)"> <span>Infusionsoft</span> </a> </li>
                      </ul>
                    </div>
                    <div className="primary-nav--mobile__overview-link"> <a href="https://keap.com/why-keap" className="link small green arrow right" data-event-label="Products > Why Keap? (Mobile)">Why Keap?</a> </div>
                  </div>
                  <div className="primary-nav--mobile__slide" data-slide-id="features">
                    <div className="primary-nav--mobile__slide-header">
                      <i className="back-button icon-arrow-back" data-subnav-target="main" /> 
                      <p className="small txt-medium margin-bottom-0">Features</p>
                    </div>
                    <div className="primary-nav--mobile__scroll-section has-overview-link">
                      <ul className="subnav no-bullets links-no-underline margin-bottom-0">
                        <li> <a href="https://keap.com/features/client-management" data-event-label="Features > CRM (Client management) (Mobile)"> <span>CRM (Client management)</span> </a> </li>
                        <li> <a href="https://keap.com/features/messages" data-event-label="Features > Messages (Mobile)"> <span>Messages</span> </a> </li>
                        <li> <a href="https://keap.com/features/appointments" data-event-label="Features > Appointments (Mobile)"> <span>Appointments</span> </a> </li>
                        <li> <a href="https://keap.com/features/sales-pipeline" data-event-label="Features > Sales Pipeline (Mobile)"> <span>Sales Pipeline</span> </a> </li>
                        <li> <a href="https://keap.com/features/automation" data-event-label="Features > Marketing Automation (Mobile)"> <span>Marketing Automation</span> </a> </li>
                        <li> <a href="https://keap.com/features/invoices-payments" data-event-label="Features > Invoices & Payments (Mobile)"> <span>Invoices &amp; Payments</span> </a> </li>
                      </ul>
                    </div>
                    <div className="primary-nav--mobile__overview-link"> <a href="https://keap.com/features" className="link small green arrow right" data-event-label="Features > More (Mobile)">More</a> </div>
                  </div>
                  <div className="primary-nav--mobile__slide" data-slide-id="interesting-stuff">
                    <div className="primary-nav--mobile__slide-header">
                      <i className="back-button icon-arrow-back" data-subnav-target="main" /> 
                      <p className="small txt-medium margin-bottom-0">Interesting stuff</p>
                    </div>
                    <div className="primary-nav--mobile__scroll-section has-overview-link">
                      <ul className="subnav no-bullets links-no-underline margin-bottom-0">
                        <li> <a href="https://keap.com/business-success-blog" data-event-label="Interesting stuff > Marketing blog (Mobile)"> <span>Marketing blog</span> </a> </li>
                        <li> <a href="https://keap.com/product-updates" data-event-label="Interesting stuff > Product blog (Mobile)"> <span>Product blog</span> </a> </li>
                        <li> <a href="https://keap.com/resources/podcasts" data-event-label="Interesting stuff > Podcasts (Mobile)"> <span>Podcasts</span> </a> </li>
                        <li> <a href="https://keap.com/lifecycle-marketing/assessment" data-event-label="Interesting stuff > Lifecycle Marketing (Mobile)"> <span>Lifecycle Marketing</span><span className="bug">New</span> </a> </li>
                        <li> <a href="https://keap.com/resources/tools" data-event-label="Interesting stuff > Tools (Mobile)"> <span>Tools</span> </a> </li>
                        <li> <a href="https://keap.com/resources/guides" data-event-label="Interesting stuff > Guides (Mobile)"> <span>Guides</span> </a> </li>
                        <li> <a href="https://keap.com/customer-stories" data-event-label="Interesting stuff > Success stories (Mobile)"> <span>Success stories</span> </a> </li>
                        <li> <a href="https://keap.com/customer-webinars" data-event-label="Interesting stuff > Customer Webinars (Mobile)"> <span>Customer Webinars</span> </a> </li>
                        <li> <a href="https://keap.com/resources/webinars" data-event-label="Interesting stuff > Resource Webinars (Mobile)"> <span>Resource Webinars</span> </a> </li>
                        <li> <a href="https://pages.keap.com/keap-live-demo-registration.html" data-event-label="Interesting stuff > Live demo (Mobile)"> <span>Live demo</span> </a> </li>
                        <li> <a href="https://keap.com/resources/events" data-event-label="Interesting stuff > Events (Mobile)"> <span>Events</span> </a> </li>
                        <li> <a href="https://keap.com/whats-new" data-event-label="Interesting stuff > What's new (Mobile)"> <span>What's new</span><span className="bug">New</span> </a> </li>
                        <li> <a href="https://community.infusionsoft.com" data-event-label="Interesting stuff > User community (Mobile)"> <span>User community</span> </a> </li>
                        <li> <a href="https://keap.com/help" data-event-label="Interesting stuff > Help center (Mobile)"> <span>Help center</span> </a> </li>
                        <li> <a href="https://help.keap.com/help/contact-support" data-event-label="Interesting stuff > Customer support (Mobile)"> <span>Customer support</span> </a> </li>
                      </ul>
                    </div>
                    <div className="primary-nav--mobile__overview-link"> <a href="https://keap.com/resources" className="link small green arrow right" data-event-label="Interesting stuff > More (Mobile)">More</a> </div>
                  </div>
                  <div className="primary-nav--mobile__slide" data-slide-id="more">
                    <div className="primary-nav--mobile__slide-header">
                      <i className="back-button icon-arrow-back" data-subnav-target="main" /> 
                      <p className="small txt-medium margin-bottom-0">More</p>
                    </div>
                    <div className="primary-nav--mobile__scroll-section has-overview-link">
                      <ul className="subnav no-bullets links-no-underline margin-bottom-0">
                        <li> <a href="https://keap.com/about" data-event-label="More > About (Mobile)"> <span>About</span> </a> </li>
                        <li> <a href="https://keap.com/about/careers" data-event-label="More > Careers (Mobile)"> <span>Careers</span> </a> </li>
                        <li> <a href="https://marketplace.infusionsoft.com/search?listingTypes=Service&certified=true" data-event-label="More > Find a partner (Mobile)"> <span>Find a partner</span> </a> </li>
                        <li> <a href="https://keap.com/partners" data-event-label="More > Become a partner (Mobile)"> <span>Become a partner</span> </a> </li>
                        <li> <a href="https://keap.com/lp/franchise" data-event-label="More > For franchises (Mobile)"> <span>For franchises</span> </a> </li>
                        <li> <a href="https://marketplace.infusionsoft.com" data-event-label="More > Marketplace (Mobile)"> <span>Marketplace</span> </a> </li>
                        <li> <a href="https://keap.com/contact" data-event-label="More > Contact us (Mobile)"> <span>Contact us</span> </a> </li>
                      </ul>
                    </div>
                    <div className="primary-nav--mobile__overview-link"> <a href="#" className="link small green arrow right" data-event-label="More > More (Mobile)">More</a> </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          <div className="primary-nav--mobile__backdrop" />
        </div>
        <section className="body-wrapper ">
        <Hero></Hero>
        <First></First>
        <Second></Second>
        <ButtonSwitch ShowForm={this.triggerSwitchState} />
        
        {this.state.isSwitchState && <Form />}
        
        </section>
        <footer className="footer-primary">
          <div className="footer-primary__rebrand bkgd-brown-light vertical-spacing">
            <div className="grid-container">
              <div className="grid-x">
                <div className="cell small-12 text-center"> <a className="link arrow right green" data-modal-trigger="infusionsoft_rebrand">Infusionsoft is now Keap<span className="show-for-medium">, learn why</span></a> </div>
              </div>
            </div>
          </div>
          <div className="footer-primary__navigation">
            <div className="grid-container">
              <div className="grid-x grid-padding-x align-center">
                <div className="footer-primary__company-info cell small-12 large-3">
                  <a className="keap-logo" href="https://keap.com" data-event-label="Keap logo">
                    <svg xmlns="http://www.w3.org/2000/svg" width={87} height={40} viewBox="0 0 87 40" fill="none" preserveAspectRatio="xMinYMid slice">
                      <path d="M20.3 28.1L17.5 31C17.1 31.5 16.5 31.4 16 31L6.1 20.9V30.3C6.1 30.9 5.7 31.3 5 31.3H1C0.4 31.3 0 30.9 0 30.3V1C0 0.4 0.4 0 1 0H5C5.7 0 6.1 0.4 6.1 1V10.6H19.6C20.2 10.6 20.6 11 20.6 11.6V15.7C20.6 16.3 20.2 16.7 19.6 16.7H10.4L20.3 26.7C20.7 27.1 20.7 27.6 20.3 28.1ZM42.5 20.9C42.5 21.3 42.4 21.8 42.4 22.2 42.3 22.8 41.9 23.1 41.3 23.1H27.9C28.6 24.9 30.3 26.1 32.6 26.1 34.1 26.1 35.4 25.5 36.3 24.5 36.7 24 37.1 23.9 37.7 24.2L40.8 26.1C41.3 26.5 41.5 27 41.1 27.5 39.2 30.1 36.1 31.7 32.5 31.7 26.3 31.7 21.8 27.1 21.8 21 21.8 14.8 26.1 10.1 32.1 10.1 38.3 10.1 42.5 14.7 42.5 20.9ZM36.5 18.7C35.9 16.8 34.3 15.7 32.2 15.7 29.9 15.7 28.3 16.8 27.8 18.7H36.5ZM62.7 18.3V30.3C62.7 30.9 62.4 31.3 61.7 31.3H57.8C57.2 31.3 56.8 30.9 56.8 30.3V29.1C55.2 30.9 53.4 31.7 51.1 31.7 46.6 31.7 43.6 29.2 43.6 25.3 43.6 21.2 46.6 18.6 51 18.6H56.8V18.1C56.8 16.7 55.4 15.7 53.4 15.7 52.1 15.7 50.8 16.2 50.2 16.9 49.8 17.3 49.6 17.6 49 17.6H45.2C44.5 17.6 44.1 17.2 44.2 16.6 45 12.7 48.3 10.1 53.3 10.1 59 10.1 62.7 13.4 62.7 18.3ZM56.8 23.6V22.9H51.9C50.3 22.9 49.6 23.8 49.6 24.9 49.6 26 50.5 26.9 52.6 26.9 55.1 26.9 56.8 25.5 56.8 23.6ZM86.5 21C86.5 27 82.3 31.7 76.7 31.7 74.4 31.7 72.4 30.9 71.2 29.4V39C71.2 39.6 70.8 40 70.1 40H66.1C65.5 40 65.1 39.6 65.1 39V11.6C65.1 11 65.5 10.6 66.1 10.6H70C70.7 10.6 71 11 71 11.6V12.8C72.3 11.1 74.3 10.1 76.6 10.1 82.2 10.1 86.5 14.9 86.5 21ZM80.4 21C80.4 18.2 78.5 16.1 75.8 16.1 72.9 16.1 70.9 18.2 70.9 21 70.9 23.7 72.9 25.8 75.8 25.8 78.5 25.8 80.4 23.7 80.4 21Z" fill="#36A635" />
                    </svg>
                  </a>
                  <p><a href="tel:+18668000004" className="link green" data-event-label="+1 866 800 0004">+1 866 800 0004</a></p>
                  <p><a href="https://keap.com/contact" className="link green">Customer support</a></p>
                  <div className="footer-primary__search"> <input id="search_value" type="text" name="searchValue" placeholder="Search the site" /> <button id="search_button" className="link arrow green" type="button">Search</button> </div>
                </div>
                <div className="cell small-12 medium-3 large-2 large-offset-1">
                  <div className="footer-primary__link-list-container">
                    <div className="footer-primary__link-list-header">
                      <p className="xsmall"> <a href="#" data-event-label="Keap CRM software">Keap CRM software</a> </p>
                    </div>
                    <ul className="footer-primary__link-list no-bullets links-no-underline">
                      <li><a href="https://keap.com/features" data-event-label="Overview">Overview</a></li>
                      <li><a href="https://keap.com/features/client-management" data-event-label="CRM (Client management)">CRM (Client management)</a></li>
                      <li><a href="https://keap.com/features/messages" data-event-label="Messages">Messages</a></li>
                      <li><a href="https://keap.com/features/appointments" data-event-label="Appointments">Appointments</a></li>
                      <li><a href="https://keap.com/features/sales-pipeline" data-event-label="Sales Pipeline">Sales Pipeline</a></li>
                      <li><a href="https://keap.com/features/automation" data-event-label="Marketing Automation">Marketing Automation</a></li>
                      <li><a href="https://keap.com/features/quotes" data-event-label="Quotes">Quotes</a></li>
                      <li><a href="https://keap.com/features/invoices-payments" data-event-label="Invoices & Payments">Invoices &amp; Payments</a></li>
                      <li><a href="https://keap.com/features/integrations" data-event-label="Integrations">Integrations</a></li>
                      <li><a href="https://keap.com/features/reporting" data-event-label="Reporting & Insights">Reporting &amp; Insights</a></li>
                    </ul>
                  </div>
                </div>
                <div className="cell small-12 medium-3 large-2 ">
                  <div className="footer-primary__link-list-container">
                    <div className="footer-primary__link-list-header">
                      <p className="xsmall"> <a href="#" data-event-label="Blog">Blog</a> </p>
                    </div>
                    <ul className="footer-primary__link-list no-bullets links-no-underline">
                      <li><a href="https://keap.com/business-success-blog" data-event-label="All topics">All topics</a></li>
                      <li><a href="https://keap.com/business-success-blog/category/marketing" data-event-label="Marketing">Marketing</a></li>
                      <li><a href="https://keap.com/business-success-blog/category/sales" data-event-label="Sales">Sales</a></li>
                      <li><a href="https://keap.com/business-success-blog/category/growth" data-event-label="Growth">Growth</a></li>
                      <li><a href="https://keap.com/business-success-blog/category/customer-service" data-event-label="Customer service">Customer service</a></li>
                      <li><a href="https://keap.com/business-success-blog/category/business-management" data-event-label="Business management">Business management</a></li>
                    </ul>
                  </div>
                </div>
                <div className="cell small-12 medium-3 large-2 ">
                  <div className="footer-primary__link-list-container">
                    <div className="footer-primary__link-list-header">
                      <p className="xsmall"> <a href="#" data-event-label="Customer resources">Customer resources</a> </p>
                    </div>
                    <ul className="footer-primary__link-list no-bullets links-no-underline">
                      <li><a href="https://keap.com/help" data-event-label="Help center">Help center</a></li>
                      <li><a href="https://keap.com/onboarding" data-event-label="Video tutorials">Video tutorials</a></li>
                      <li><a href="https://community.infusionsoft.com" data-event-label="User community">User community</a></li>
                      <li><a href="https://pages.keap.com/keap-live-demo-registration.html" data-event-label="Live demo">Live demo</a></li>
                      <li><a href="https://keap.com/customer-webinars" data-event-label="Customer Webinars">Customer Webinars</a></li>
                    </ul>
                  </div>
                </div>
                <div className="cell small-12 medium-3 large-2 ">
                  <div className="footer-primary__link-list-container">
                    <div className="footer-primary__link-list-header">
                      <p className="xsmall"> <a href="#" data-event-label="Who we are">Who we are</a> </p>
                    </div>
                    <ul className="footer-primary__link-list no-bullets links-no-underline">
                      <li><a href="https://keap.com/about" data-event-label="About">About</a></li>
                      <li><a href="https://keap.com/about/careers" data-event-label="Careers">Careers</a></li>
                      <li><a href="https://marketplace.infusionsoft.com/search?listingTypes=Service&certified=true" data-event-label="Find a partner">Find a partner</a></li>
                      <li><a href="https://keap.com/partners" data-event-label="Become a partner">Become a partner</a></li>
                      <li><a href="https://keap.com/lp/franchise" data-event-label="For franchises">For franchises</a></li>
                      <li><a href="https://keap.com/contact" data-event-label="Contact us">Contact us</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-primary__social bkgd-brown-light">
            <div className="grid-container">
              <div className="grid-x grid-padding-x align-justify align-middle">
                <div className="cell small-12 text-center">
                  <div className="h4 standalone txt-normal">Helping thousands of small businesses succeed since 2001</div>
                  <div className="grid-x grid-padding-x align-center-middle">
                    <div className="cell shrink no-text-spacing">
                      <a href="https://www.facebook.com/keap" className="no-text-spacing" target="_blank" rel="noopener" data-event-label="Facebook">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                          <path fill="#BAB6AD" fillRule="evenodd" d="M22.7 0L1.3 0C0.6 0 0 0.6 0 1.3L0 22.7C0 23.4 0.6 24 1.3 24L12.8 24 12.8 14.7 9.7 14.7 9.7 11.1 12.8 11.1 12.8 8.4C12.8 5.3 14.7 3.6 17.5 3.6 18.8 3.6 19.9 3.7 20.3 3.8L20.3 7 18.4 7C16.9 7 16.6 7.7 16.6 8.8L16.6 11.1 20.1 11.1 19.7 14.7 16.6 14.7 16.6 24 22.7 24C23.4 24 24 23.4 24 22.7L24 1.3C24 0.6 23.4 0 22.7 0L22.7 0Z" />
                        </svg>
                      </a>
                    </div>
                    <div className="cell shrink no-text-spacing">
                      <a href="https://twitter.com/keapgrowing" className="no-text-spacing" target="_blank" rel="noopener" data-event-label="Twitter">
                        <svg xmlns="http://www.w3.org/2000/svg" width={27} height={21} viewBox="0 0 27 21">
                          <path fill="#BAB6AD" fillRule="evenodd" d="M26.7 2.4C25.7 2.8 24.6 3.1 23.5 3.2 24.6 2.6 25.5 1.6 25.9 0.4 24.9 1 23.7 1.4 22.4 1.6 21.4 0.6 20 0 18.5 0 15.4 0 13 2.3 13 5.2 13 5.6 13 6 13.1 6.4 8.6 6.1 4.6 4.1 1.9 0.9 1.4 1.7 1.1 2.6 1.1 3.6 1.1 5.4 2.1 6.9 3.5 7.9 2.7 7.8 1.8 7.6 1.1 7.2 1.1 7.2 1.1 7.3 1.1 7.3 1.1 9.8 3 11.9 5.5 12.4 5 12.5 4.5 12.6 4 12.6 3.7 12.6 3.3 12.5 3 12.5 3.7 14.5 5.7 16 8.1 16.1 6.2 17.4 3.9 18.3 1.3 18.3 0.9 18.3 0.4 18.3 0 18.2 2.4 19.7 5.3 20.5 8.4 20.5 18.4 20.5 23.9 12.6 23.9 5.8 23.9 5.6 23.9 5.3 23.9 5.1 25 4.4 25.9 3.5 26.7 2.4L26.7 2.4Z" />
                        </svg>
                      </a>
                    </div>
                    <div className="cell shrink no-text-spacing">
                      <a href="https://www.instagram.com/keap" className="no-text-spacing" target="_blank" rel="noopener" data-event-label="Instagram">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={25} viewBox="0 0 24 25">
                          <g fill="#BAB6AD">
                            <path d="M16.7 0.7L7.3 0.7C3.5 0.7 0.3 3.8 0.3 7.7L0.3 17.3C0.3 21.2 3.5 24.3 7.3 24.3L16.7 24.3C20.5 24.3 23.7 21.2 23.7 17.3L23.7 7.7C23.7 3.8 20.5 0.7 16.7 0.7ZM21.3 17.3C21.3 19.9 19.3 21.9 16.7 21.9L7.3 21.9C4.7 21.9 2.7 19.9 2.7 17.3L2.7 7.7C2.7 5.1 4.7 3.1 7.3 3.1L16.7 3.1C19.3 3.1 21.3 5.1 21.3 7.7L21.3 17.3ZM11.8 6.4C8.6 6.4 6 9.1 6 12.3 6 15.6 8.6 18.2 11.8 18.2 15 18.2 17.7 15.6 17.7 12.3 17.7 9.1 15 6.4 11.8 6.4ZM11.8 15.9C9.9 15.9 8.3 14.3 8.3 12.3 8.3 10.3 9.9 8.7 11.8 8.7 13.8 8.7 15.4 10.3 15.4 12.3 15.4 14.3 13.8 15.9 11.8 15.9Z" />
                            <ellipse cx="17.7" cy="6.4" rx="1.3" ry="1.4" />
                          </g>
                        </svg>
                      </a>
                    </div>
                    <div className="cell shrink no-text-spacing">
                      <a href="https://www.linkedin.com/company/keap-growing/" className="no-text-spacing" target="_blank" rel="noopener" data-event-label="Linkedin">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                          <path fill="#BAB6AD" fillRule="evenodd" d="M22.2 0L1.8 0C0.8 0 0 0.8 0 1.7L0 22.3C0 23.2 0.8 24 1.8 24L22.2 24C23.2 24 24 23.2 24 22.3L24 1.7C24 0.8 23.2 0 22.2 0L22.2 0ZM7.1 20.5L3.6 20.5 3.6 9 7.1 9 7.1 20.5 7.1 20.5ZM5.3 7.4C4.2 7.4 3.3 6.5 3.3 5.4 3.3 4.2 4.2 3.3 5.3 3.3 6.5 3.3 7.4 4.2 7.4 5.4 7.4 6.5 6.5 7.4 5.3 7.4L5.3 7.4ZM20.5 20.5L16.9 20.5 16.9 14.9C16.9 13.6 16.9 11.8 15 11.8 13.2 11.8 12.9 13.3 12.9 14.8L12.9 20.5 9.4 20.5 9.4 9 12.8 9 12.8 10.6 12.8 10.6C13.3 9.7 14.5 8.7 16.2 8.7 19.8 8.7 20.5 11.1 20.5 14.2L20.5 20.5 20.5 20.5Z" />
                        </svg>
                      </a>
                    </div>
                    <div className="cell shrink no-text-spacing">
                      <a href="https://www.youtube.com/user/infusionsoft" className="no-text-spacing" target="_blank" rel="noopener" data-event-label="Youtube">
                        <svg xmlns="http://www.w3.org/2000/svg" width={33} height={24} viewBox="0 0 33 24">
                          <path fill="#BAB6AD" d="M26.1 0L6.8 0C3.1 0 0 3.1 0 6.9L0 16.5C0 20.3 3.1 23.4 6.8 23.4L26.1 23.4C29.8 23.4 32.9 20.3 32.9 16.5L32.9 6.9C32.9 3.1 29.8 0 26.1 0ZM21.4 12.2L12.4 16.5C12.2 16.6 11.9 16.4 11.9 16.1L11.9 7.3C11.9 7 12.2 6.8 12.5 6.9L21.4 11.5C21.7 11.7 21.7 12 21.4 12.2Z" />
                        </svg>
                      </a>
                    </div>
                    <div className="cell shrink no-text-spacing">
                      <a href="https://www.pinterest.com/keapgrowing/" className="no-text-spacing" target="_blank" rel="noopener" data-event-label="Pinterest">
                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M24 12C24 18.629 18.629 24 12 24C10.7613 24 9.57097 23.8113 8.44839 23.4629C8.9371 22.6645 9.66774 21.3581 9.93871 20.3177C10.0839 19.7565 10.6839 17.4629 10.6839 17.4629C11.0758 18.2081 12.2177 18.8419 13.4323 18.8419C17.0516 18.8419 19.6597 15.5129 19.6597 11.3758C19.6597 7.4129 16.4226 4.44677 12.2613 4.44677C7.08387 4.44677 4.33065 7.92097 4.33065 11.7097C4.33065 13.471 5.26935 15.6629 6.76452 16.3597C6.99194 16.4661 7.1129 16.4177 7.16613 16.2C7.20484 16.0355 7.40806 15.2177 7.5 14.8403C7.52903 14.7194 7.51452 14.6129 7.41774 14.4968C6.92903 13.8919 6.53226 12.7887 6.53226 11.7581C6.53226 9.11129 8.53548 6.55161 11.9516 6.55161C14.8984 6.55161 16.9645 8.55968 16.9645 11.4339C16.9645 14.6806 15.3242 16.9306 13.1903 16.9306C12.0145 16.9306 11.129 15.9581 11.4145 14.7629C11.7532 13.3355 12.4065 11.7968 12.4065 10.7661C12.4065 9.84677 11.9129 9.07742 10.8871 9.07742C9.68226 9.07742 8.71452 10.321 8.71452 11.9903C8.71452 13.0548 9.07258 13.771 9.07258 13.771C9.07258 13.771 7.8871 18.7935 7.66935 19.7323C7.42742 20.7677 7.52419 22.229 7.62581 23.1774C3.16452 21.4306 0 17.0855 0 12C0 5.37097 5.37097 0 12 0C18.629 0 24 5.37097 24 12Z" fill="#BAB6AD" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-primary__legal bkgd-brown-light">
            <div className="grid-container">
              <div className="grid-x grid-padding-x align-justify align-middle">
                <div className="cell small-12 text-center">
                  <p className="xxsmall txt-mono"> <a href="https://keap.com/legal/privacy-policy" data-event-label="Privacy">Privacy Policy</a> | <a href="https://keap.com/legal" data-event-label="Legal">Legal</a> | <a href="https://keap.com/legal/data-protection-faq" data-event-label="GDPR">GDPR</a> | © 2020 Keap. All Rights Reserved </p>
                  <p className="xxsmall txt-mono txt-gray-60 margin-bottom-0">Infusion Software, Inc., 1260 S. Spectrum Blvd., Chandler, AZ 85286 1 (866) 800-0004</p>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <div id="infusionsoft_rebrand" className="modal global-rebrand-modal w-970" aria-hidden="true" data-modal-name="Infusionsoft is now Keap Rebrand">
          <div className="modal__overlay" tabIndex={-1} data-micromodal-close>
            <div className="modal__container" role="dialog" aria-modal="true">
              <button className="modal__close clickable no-text-spacing" data-micromodal-close>
                <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M18 1.8L16.2 0 9 7.2 1.8 0 0 1.8 7.2 9 0 16.2 1.8 18 9 10.8 16.2 18 18 16.2 10.8 9 18 1.8Z" fill="#74716C" />
                </svg>
              </button>
              <main className="modal__content" id="infusionsoft_rebrand-content">
                <div className="grid-x grid-padding-x align-center">
                  <div className="cell small-12 large-11">
                    <h3 className="text-left large-text-center">Why the name change?</h3>
                    <p>Infusionsoft is now Keap. Why? Because it takes perseverance to grow a successful small business, and we’re here to help.</p>
                    <p>Our mission remains the same: To simplify growth for millions of small businesses worldwide.</p>
                    <p>As Keap, we now offer a family of products designed to help small businesses no matter what stage they’re in.</p>
                    <p>We created <span className="txt-bold">Keap</span>, the all-in-one CRM, sales and marketing platform for growing service businesses, because most small businesses need to start simple and grow over time.</p>
                    <p>Our top-tier product, Infusionsoft, is for small businesses with more advanced <span className="txt-bold">sales and marketing automation needs</span>.</p>
                    <p>So whether you want to start simple or you’re ready for our most advanced edition, we offer a Keap product that will help you get organized, deliver great service, and grow your business.</p>
                    <p className="text-left large-text-center txt-bold">Keep going. Keep serving. Keep growing.</p>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
        <div id="modal_promo_1mofree" className="modal global-promo-modal global-promo-modal--1mofree" aria-hidden="true" data-modal-name="Promo Modal - 1mofree" data-exit-intent={0} data-modal-delay={10} data-promo-code="1mofree" data-promo-hash="9024a997e6abdd760bb0bcaeda1eb0cb" data-session-id="0pYGFNS">
          <div className="modal__overlay" tabIndex={-1} data-micromodal-close>
            <div className="modal__container" role="dialog" aria-modal="true">
              <button className="modal__close clickable no-text-spacing" data-micromodal-close>
                <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M18 1.8L16.2 0 9 7.2 1.8 0 0 1.8 7.2 9 0 16.2 1.8 18 9 10.8 16.2 18 18 16.2 10.8 9 18 1.8Z" fill="#74716C" />
                </svg>
              </button>
              <main className="modal__content" id="modal_promo_1mofree-content">
                <div className="text-center">
                  <p>
                    <noscript className="noscript-image">&lt;img class="" src="//assets.keap.com/image/upload/c_scale,dpr_2,f_auto,q_95,w_100/v1574373074/keap/promos/sale.png"&gt;</noscript>
                    <img className="lazyload" src="//assets.keap.com/image/upload/c_scale,dpr_1,f_auto,q_95,w_100/v1574373074/keap/promos/sale.png" srcSet="//assets.keap.com/image/upload/c_scale,dpr_1,f_auto,q_5,w_100/v1574373074/keap/promos/sale.png" data-srcset="//assets.keap.com/image/upload/c_scale,dpr_1,f_auto,q_95,w_100/v1574373074/keap/promos/sale.png 1x, //assets.keap.com/image/upload/c_scale,dpr_2,f_auto,q_95,w_100/v1574373074/keap/promos/sale.png 2x, //assets.keap.com/image/upload/c_scale,dpr_3,f_auto,q_95,w_100/v1574373074/keap/promos/sale.png 3x" data-sizes="auto" /></p> 
                  <p className="h4">Your first month is on us</p>
                  <p>Your 1st month of Keap or Infusionsoft is <span className="txt-weight-bold txt-green-keap">free</span> if you purchase in the next:</p>
                  <div className="grid-x grid-padding-x">
                    <div className="cell small-12">
                      <div className="countdown-wrapper countdown--large countdown--px-2" data-seconds-remaining={202723}>
                        <div className="column" data-hide-for="days"> <span className="number" data-countdown-slot="days" /> <span className="number-label" data-countdown-label="days" data-label="day" /> </div>
                        <div className="column separator" data-hide-for="days"> <span className="number">:</span> </div>
                        <div className="column"> <span className="number" data-countdown-slot="hours" /> <span className="number-label" data-countdown-label="hours" data-label="hr" /> </div>
                        <div className="column separator"> <span className="number">:</span> </div>
                        <div className="column"> <span className="number" data-countdown-slot="minutes" /> <span className="number-label" data-countdown-label="minutes" data-label="min" /> </div>
                        <div className="column separator"> <span className="number">:</span> </div>
                        <div className="column"> <span className="number" data-countdown-slot="seconds" /> <span className="number-label" data-countdown-label="seconds" data-label="sec" /> </div>
                      </div>
                    </div>
                  </div>
                  <p className="button-row"> <a href="https://keap.com/pricing" className="button small-expanded margin-bottom-0" data-event-label="Save now" data-dismiss-promo>Save now</a> </p>
                  <p className="xsmall txt-gray-60 margin-bottom-0"> <span className="clickable" data-event-label="No thanks" data-micromodal-close>No thanks</span> </p>
                </div>
              </main>
            </div>
          </div>
        </div>
        <div id="livedemomodal" className="modal livedemomodal has-form wider" aria-hidden="true" data-modal-name="Live Demo Exit Intent Modal">
          <div className="modal__overlay" tabIndex={-1} data-micromodal-close>
            <div className="modal__container" role="dialog" aria-modal="true">
              <button className="modal__close clickable no-text-spacing" data-micromodal-close>
                <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M18 1.8L16.2 0 9 7.2 1.8 0 0 1.8 7.2 9 0 16.2 1.8 18 9 10.8 16.2 18 18 16.2 10.8 9 18 1.8Z" fill="#74716C" />
                </svg>
              </button>
              <main className="modal__content" id="livedemomodal-content">
                <div className="grid-x align-center grid-margin-x">
                  <div className="cell small-12 medium-shrink text-center show-for-large">
                    <div className="jack-desktop-image">
                      <noscript className="noscript-image">&lt;img class="" src="//assets.keap.com/image/upload/b_rgb:FFFFFF,c_limit,dpr_2,f_auto,q_95,w_338/v1578416212/tests/jack-desktop.jpg"&gt;</noscript>
                      <img className="lazyload" src="//assets.keap.com/image/upload/b_rgb:FFFFFF,c_limit,dpr_1,f_auto,q_95,w_338/v1578416212/tests/jack-desktop.jpg" srcSet="//assets.keap.com/image/upload/b_rgb:FFFFFF,c_limit,dpr_1,f_auto,q_5,w_338/v1578416212/tests/jack-desktop.jpg" data-srcset="//assets.keap.com/image/upload/b_rgb:FFFFFF,c_limit,dpr_1,f_auto,q_95,w_338/v1578416212/tests/jack-desktop.jpg 1x, //assets.keap.com/image/upload/b_rgb:FFFFFF,c_limit,dpr_2,f_auto,q_95,w_338/v1578416212/tests/jack-desktop.jpg 2x, //assets.keap.com/image/upload/b_rgb:FFFFFF,c_limit,dpr_3,f_auto,q_95,w_338/v1578416212/tests/jack-desktop.jpg 3x" alt="Jack Smithson" data-sizes="auto" /> 
                      <p className="text-left caption txt-gray-60"><strong>Jack Smithson</strong>, Small Business Growth Expert.</p>
                    </div>
                  </div>
                  <div className="cell small-12 medium-auto text-center large-text-left">
                    <h5 className="has-subhead">Join our live demo of Keap Pro and Keap Grow</h5>
                    <p className="xsmall hide-for-large">Demo run time is 40 minutes.</p>
                    <div className="hide-for-large jack-mobile-image">
                      <noscript className="noscript-image">&lt;img class="" src="//assets.keap.com/image/upload/b_rgb:FFFFFF,c_limit,dpr_2,f_auto,q_95,w_276/v1578416212/tests/jack-mobile.jpg"&gt;</noscript>
                      <img className="lazyload" src="//assets.keap.com/image/upload/b_rgb:FFFFFF,c_limit,dpr_1,f_auto,q_95,w_276/v1578416212/tests/jack-mobile.jpg" srcSet="//assets.keap.com/image/upload/b_rgb:FFFFFF,c_limit,dpr_1,f_auto,q_5,w_276/v1578416212/tests/jack-mobile.jpg" data-srcset="//assets.keap.com/image/upload/b_rgb:FFFFFF,c_limit,dpr_1,f_auto,q_95,w_276/v1578416212/tests/jack-mobile.jpg 1x, //assets.keap.com/image/upload/b_rgb:FFFFFF,c_limit,dpr_2,f_auto,q_95,w_276/v1578416212/tests/jack-mobile.jpg 2x, //assets.keap.com/image/upload/b_rgb:FFFFFF,c_limit,dpr_3,f_auto,q_95,w_276/v1578416212/tests/jack-mobile.jpg 3x" alt="Jack Smithson" data-sizes="auto" /> 
                      <p className="text-left caption txt-gray-60"><strong>Jack Smithson</strong>, Small Business Growth Expert.</p>
                    </div>
                    <form id="mktoForm_1836_exitIntent" className="vertical-spacing" data-form-id={1836}>
                      <div className="form-loading custom-input-wrapper placeholder">
                        <div className="placeholder-input"> <input type="text" disabled /> </div>
                        <div className="text-center"> <button className="button" type="button" disabled> <span>&nbsp;</span> </button> </div>
                      </div>
                      <div className="mkto-form-template">
                        <div className="step">
                          <p className="xsmall show-for-large">Demo run time is 40 minutes.</p>
                          <div data-marketo-field="lead_RequestCampaign" />
                          <div className="step__footer single"> <button type="button" className="button" data-step-next>Next</button> </div>
                        </div>
                        <div className="step">
                          <p className="xsmall">You’re registering for <span className="txt-bold webinar-date-time">---</span></p>
                          <div data-marketo-field="FirstName" />
                          <div data-marketo-field="LastName" />
                          <div data-marketo-field="Email" />
                          <div data-marketo-field="Phone" />
                          <div data-marketo-field="Company" />
                          <div data-marketo-field="Mobile_Consent__c" />
                          <div className="step__footer"> <button type="button" className="button" data-step-next>Submit</button> <button type="button" className="link arrow left green" data-step-previous>Previous</button> </div>
                        </div>
                      </div>
                      <div className="mkto-form-contents hide"> </div>
                    </form>
                    <div className="confirmation-step hide">
                      <h5 className="text-center">You're registered!</h5>
                      <p className="small text-center">We'll see you on <span className="txt-bold webinar-date-time">---</span></p>
                      <p className="xsmall text-center">A confirmation has been sent to your email address.</p>
                      <p className="text-center"> <button type="button" className="button" data-micromodal-close>Close</button> </p>
                    </div>
                    <p className="caption">Watch a recording <a href="https://pages.keap.com/live-demo-replay.html" data-event-label="Watch a recording">here</a> if you can’t make the live demo.</p>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
        <div className="floating-demo-bar">  <a href="https://keap.com/product-demo" className="button" data-event-label="See demo">See demo</a></div>
        <div id="mktoForms2BaseStyle" style={{display: 'none'}} aria-hidden="true">
          <div id="mktoForms2ThemeStyle" />
        </div>
      </div>
    );
  }
}
      
export default Body;