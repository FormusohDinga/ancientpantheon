// import App from '../components/App'
//
//
// const Resume = ({ router: { pathname } }) => (
//     <App>
//     <div className="container">
//         <div className="row">
//             <div className="col-xs-12">
//                 <div id="photo-header" className="text-center">
//                     {/* PHOTO (AVATAR) */}
//                     <div id="photo">
//                         <img src="//www.gravatar.com/avatar/7e6be1e623fb85adde3462fa8587caf2?s=200&r=pg&d=mm" alt="avatar" />
//                     </div>
//                     <div id="text-header">
//                         <h1>Richard Hendriks<br /><span>Programmer</span></h1>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         <div className="row">
//             <div className="col-xs-12 col-sm-7">
//                 {/* ABOUT ME */}
//                 <div className="box">
//                     <h2><i className="fa fa-user ico" /> About</h2>
//                     <p>Richard hails from Tulsa. He has earned degrees from the University of Oklahoma and Stanford. (Go Sooners and Cardinals!) Before starting Pied Piper, he worked for Hooli as a part time software developer. While his work focuses on applied information theory, mostly optimizing lossless compression schema of both the length-limited and adaptive variants, his non-work interests range widely, everything from quantum computing to chaos theory. He could tell you about it, but THAT would NOT be a “length-limited” conversation!</p>
//                 </div>
//                 {/* WORK EXPERIENCE */}
//                 <div className="box">
//                     <h2><i className="fa fa-suitcase ico" /> Work Experience</h2>
//                     <div className="job clearfix">
//                         <div className="row">
//                             <div className="details">
//                                 <div className="where">Pied Piper</div>
//                                 <div className="address">
//                                     <a href="http://piedpiper.com" target="_blank"><i className="fa fa-globe ico" /> http://piedpiper.com</a>
//                                 </div>
//                                 <div className="year">December 2013 – December 2014</div>
//                             </div>
//                         </div>
//                         <div className="row">
//                             <div className="job-details col-xs-11">
//                                 <div className="profession">CEO/President</div>
//                                 <div className="description">
//                                     Pied Piper is a multi-platform technology based on a proprietary universal compression algorithm that has consistently fielded high Weisman Scores™ that are not merely competitive, but approach the theoretical limit of lossless compression.
//                                     <div className="highlights">Highlights</div>
//                                     <ul className="list-group">
//                                         <li className="list-group-item">Build an algorithm for artist to detect if their music was violating copy right infringement laws</li>
//                                         <li className="list-group-item">Successfully won Techcrunch Disrupt</li>
//                                         <li className="list-group-item">Optimized an algorithm that holds the current world record for Weisman Scores</li>
//                                     </ul>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 {/* AWARDS */}
//                 <div className="box">
//                     <h2><i className="fa fa-certificate ico" /> Awards</h2>
//                     <ul id="awards" className="clearfix">
//                         <li>
//                             <div className="year pull-left">November  2014</div>
//                             <div className="description pull-right">
//                                 <h3>Techcrunch</h3>
//                                 <p><i className="fa fa-trophy ico" /> Digital Compression Pioneer Award</p>
//                                 <p>There is no spoon.</p>
//                             </div>
//                         </li>
//                     </ul>
//                 </div>
//                 {/* VOLUNTEER */}
//                 <div className="box">
//                     <h2><i className="fa fa-group ico" /> Volunteer</h2>
//                     <div className="job clearfix">
//                         <div className="row">
//                             <div className="details">
//                                 <div className="where">CoderDojo</div>
//                                 <div className="address">
//                                     <a href="http://coderdojo.com/" target="_blank"><i className="fa fa-globe ico" /> http://coderdojo.com/</a>
//                                 </div>
//                                 <div className="year">January 2012 – January 2013</div>
//                             </div>
//                         </div>
//                         <div className="row">
//                             <div className="col-xs-11 pull-right">
//                                 <div className="profession">Teacher</div>
//                                 <div className="description">
//                                     Global movement of free coding clubs for young people.
//                                     <div className="highlights">Highlights</div>
//                                     <ul className="list-group">
//                                         <li className="list-group-item">Awarded 'Teacher of the Month'</li>
//                                     </ul>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="col-xs-12 col-sm-5">
//                 {/* CONTACT */}
//                 <div className="box clearfix">
//                     <h2><i className="fa fa-bullseye ico" /> Contact</h2>
//                     <div className="contact-item">
//                         <div className="icon pull-left text-center"><span className="fa fa-map-marker fa-fw" /></div>
//                         <div className="title pull-right">2712 Broadway St</div>
//                         <div className="title  pull-right">San Francisco, California CA 94115 US</div>
//                     </div>
//                     <div className="contact-item">
//                         <div className="icon pull-left text-center"><span className="fa fa-phone fa-fw" /></div>
//                         <div className="title only pull-right">(912) 555-4321</div>
//                     </div>
//                     <div className="contact-item">
//                         <div className="icon pull-left text-center"><span className="fa fa-envelope fa-fw" /></div>
//                         <div className="title only pull-right"><a href="mailto:richard@valley.com" target="_blank">richard@valley.com</a></div>
//                     </div>
//                     <div className="contact-item">
//                         <div className="icon pull-left text-center"><span className="fa fa-globe fa-fw" /></div>
//                         <div className="title only pull-right"><a href="http://richardhendricks.com" target="_blank">http://richardhendricks.com</a></div>
//                     </div>
//                     <div className="contact-item">
//                         <div className="icon pull-left text-center"><span className="fa fa-twitter fa-fw" /></div>
//                         <div className="title pull-right">Twitter</div>
//                         <div className="description pull-right"><a href target="_blank">neutralthoughts</a></div>
//                     </div>
//                     <div className="contact-item">
//                         <div className="icon pull-left text-center"><span className="fa fa-soundcloud fa-fw" /></div>
//                         <div className="title pull-right">SoundCloud</div>
//                         <div className="description pull-right"><a href="https://soundcloud.com/dandymusicnl" target="_blank">dandymusicnl</a></div>
//                     </div>
//                 </div>
//                 {/* EDUCATION */}
//                 <div className="box">
//                     <h2><i className="fa fa-university ico" /> Education</h2>
//                     <ul id="education" className="clearfix">
//                         <li>
//                             <div className="year pull-left">2011 2014</div>
//                             <div className="description pull-right">
//                                 <h3>University of Oklahoma</h3>
//                                 <p><i className="fa fa-graduation-cap ico" /> Bachelor</p>
//                                 <p>Information Technology</p>
//                                 <p>
//                                     GPA: 4.0
//                                 </p>
//                                 <div>Courses</div>
//                                 <ul className="list-group">
//                                     <li className="list-group-item">DB1101 - Basic SQL</li>
//                                     <li className="list-group-item">CS2011 - Java Introduction</li>
//                                 </ul>
//                             </div>
//                         </li>
//                     </ul>
//                 </div>
//                 {/* SKILLS */}
//                 <div className="box">
//                     <h2><i className="fa fa-tasks ico" /> Skills</h2>
//                     <div className="skills clearfix">
//                         <div className="item-skills">
//                             Web Development
//                             <span className="skill-level">Master</span>
//                         </div>
//                         <div className="col-sm-offset-1 col-sm-12 clearfix">
//                             <span className="skill badge">HTML</span>
//                             <span className="skill badge">CSS</span>
//                             <span className="skill badge">Javascript</span>
//                         </div>
//                     </div>
//                     <div className="skills clearfix">
//                         <div className="item-skills">
//                             Compression
//                             <span className="skill-level">Master</span>
//                         </div>
//                         <div className="col-sm-offset-1 col-sm-12 clearfix">
//                             <span className="skill badge">Mpeg</span>
//                             <span className="skill badge">MP4</span>
//                             <span className="skill badge">GIF</span>
//                         </div>
//                     </div>
//                 </div>
//                 {/* PUBLICATIONS */}
//                 <div className="box">
//                     <h2><i className="fa fa-book ico" /> Publications</h2>
//                     <div className="publication panel panel-default">
//                         <div className="panel-heading">
//                             <div className="name panel-title">Video compression for 3d media</div>
//                         </div>
//                         <div className="panel-body">
//                             <div className="publisher"><i className="fa fa-bookmark ico" /> Hooli</div>
//                             <div className="year">01 October  2014</div>
//                             <div className="address">
//                                 <a href="http://en.wikipedia.org/wiki/Silicon_Valley_(TV_series)" target="_blank"><i className="fa fa-globe ico" /> http://en.wikipedia.org/wiki/Silicon_Valley_(TV_series)</a>
//                             </div>
//                             <p>Innovative middle-out compression algorithm that changes the way we store data.</p>
//                         </div>
//                     </div>
//                 </div>
//                 {/* LANGUAGES */}
//                 <div className="box">
//                     <h2><i className="fa fa-language ico" /> Languages</h2>
//                     <ul className="list-group">
//                         <li className=" list-group-item">English<span className="skill badge pull-right">Native speaker</span></li>
//                     </ul>
//                 </div>
//                 {/* HOBBIES */}
//                 <div className="box">
//                     <h2><i className="fa fa-heart ico" /> Interests</h2>
//                     <div className="interests clearfix">
//                         <div className="item-interests">
//                             Wildlife
//                         </div>
//                         <div className="col-sm-offset-1 col-sm-12 clearfix">
//                             <span className="interest badge">Ferrets</span>
//                             <span className="interest badge">Unicorns</span>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="box">
//                     <h2><i className="fa fa-check-square ico" /> References</h2>
//                     <blockquote>
//                         <div>It is my pleasure to recommend Richard, his performance working as a consultant for Main St. Company proved that he will be a valuable addition to any company.</div>
//                         <footer>
//                             <a href target="_blank">Erlich Bachman</a>
//                         </footer>
//                     </blockquote><br />
//                 </div>
//             </div>
//         </div>
//     </div>
//     </App>
// )
//
// export default Resume;
//

import App from '../components/App'
import Header from '../components/Header'

export default () => (
    <App>
        <Header />
        <div className="container">
            <div className="row">
                <div className="col-xs-12">
                    <div id="photo-header" className="text-center">
                        {/* PHOTO (AVATAR) */}
                        <div id="photo">
                            <img src="//www.gravatar.com/avatar/7e6be1e623fb85adde3462fa8587caf2?s=200&r=pg&d=mm" alt="avatar" />
                        </div>
                        <div id="text-header">
                            <h1>Ron<br /><span>Programmer</span></h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12 col-sm-7">
                    {/* ABOUT ME */}
                    <div className="box">
                          </div>
                    {/* WORK EXPERIENCE */}
                    <div className="box">
                        <h2><i className="fa fa-suitcase ico" /> Work Experience</h2>
                        <div className="job clearfix">
                            <div className="row">
                                <div className="details">
                                </div>
                            </div>
                            <div className="row">
                                <div className="job-details col-xs-11">
                                    <div className="profession">CEO/President</div>
                                    <div className="description">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* AWARDS */}
                    <div className="box">

                    </div>
                    {/* VOLUNTEER */}
                    <div className="box">
                        <h2><i className="fa fa-group ico" /> Volunteer</h2>
                        <div className="job clearfix">

                            </div>
                            <div className="row">
                                <div className="col-xs-11 pull-right">
                                    <div className="profession">Teacher</div>
                                    <div className="description">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-5">
                    {/* CONTACT */}
                    <div className="box clearfix">
                        <h2><i className="fa fa-bullseye ico" /> Contact</h2>
                    </div>
                    {/* EDUCATION */}
                    <div className="box">
                        <h2><i className="fa fa-university ico" /> Education</h2>
                        <ul id="education" className="clearfix">
                            <li>
                                <div className="year pull-left">2011 2014</div>
                                <div className="description pull-right">
                                    <h3>University of Oklahoma</h3>
                                    <p><i className="fa fa-graduation-cap ico" /> Bachelor</p>
                                    <p>Information Technology</p>
                                    <p>
                                        GPA: 4.0
                                    </p>
                                    <div>Courses</div>
                                    <ul className="list-group">
                                        <li className="list-group-item">DB1101 - Basic SQL</li>
                                        <li className="list-group-item">CS2011 - Java Introduction</li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                    {/* SKILLS */}
                    <div className="box">
                        <h2><i className="fa fa-tasks ico" /> Skills</h2>
                        <div className="skills clearfix">
                            <div className="item-skills">
                                Web Development
                                <span className="skill-level">Master</span>
                            </div>
                            <div className="col-sm-offset-1 col-sm-12 clearfix">
                                <span className="skill badge">HTML</span>
                                <span className="skill badge">CSS</span>
                                <span className="skill badge">Javascript</span>
                            </div>
                        </div>
                        <div className="skills clearfix">
                            <div className="item-skills">
                                Compression
                                <span className="skill-level">Master</span>
                            </div>
                            <div className="col-sm-offset-1 col-sm-12 clearfix">
                                <span className="skill badge">Mpeg</span>
                                <span className="skill badge">MP4</span>
                                <span className="skill badge">GIF</span>
                            </div>
                        </div>
                    </div>
                    {/* PUBLICATIONS */}
                    <div className="box">

                    </div>
                    {/* LANGUAGES */}
                    <div className="box">
                        <h2><i className="fa fa-language ico" /> Languages</h2>
                        <ul className="list-group">
                            <li className=" list-group-item">English<span className="skill badge pull-right">Native speaker</span></li>
                        </ul>
                    </div>
                    {/* HOBBIES */}
                    <div className="box">
                        <h2><i className="fa fa-heart ico" /> Interests</h2>
                        <div className="interests clearfix">
                            <div className="item-interests">
                                Wildlife
                            </div>
                            <div className="col-sm-offset-1 col-sm-12 clearfix">
                                <span className="interest badge">Ferrets</span>
                                <span className="interest badge">Unicorns</span>
                            </div>
                        </div>
                    </div>
                    <div className="box">
                        <h2><i className="fa fa-check-square ico" /> References</h2>
                        <blockquote>
                            <div>It is my pleasure to recommend Richard, his performance working as a consultant for Main St. Company proved that he will be a valuable addition to any company.</div>
                            <footer>
                                <a href target="_blank">Erlich Bachman</a>
                            </footer>
                        </blockquote><br />
                    </div>
                </div>
            </div>
    </App>
)
