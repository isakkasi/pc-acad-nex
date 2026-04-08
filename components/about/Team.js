import Link from 'next/link';
import content from '@/data/content.json';

const Team = () => {
  const team = content.team.map((m) => ({
    img: m.image.split('/').pop(),
    name: m.name,
    position: m.position,
    facebook: m.social.facebook,
    twitter: m.social.twitter,
    linkedin: m.social.linkedin,
    pinterest: m.social.instagram,
  }));

  return (
    <section className="team-section fix footer-bg section-padding" id="team">
      <div className="container">
        <div className="section-title text-center">
          {/* <span className="sub-content wow fadeInUp">
            <img src="/assets/img/bale.png" alt="img" />
            Team Member
          </span> */}
          <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
            Meet Our Team
          </h2>
        </div>
        <div className="row">
          {team.map((member, index) => (
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".2s"
              key={index}
            >
              <div className="team-card-items">
                <div className="team-image">
                  <img src={`/assets/img/team/${member.img}`} alt="team-img" />
                  <div className="icon-list">
                    <ul>
                      {member.facebook && (
                        <li>
                          <a href={member.facebook}>
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                      )}
                      {member.twitter && (
                        <li>
                          <a href={member.twitter}>
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                      )}
                      {member.linkedin && (
                        <li>
                          <a href={member.linkedin}>
                            <i className="fab fa-linkedin-in" />
                          </a>
                        </li>
                      )}
                      {member.pinterest && (
                        <li>
                          <a href={member.pinterest}>
                            <i className="fab fa-pinterest-p" />
                          </a>
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
                <div className="team-content">
                  <h4>
                    <Link href="team-details">{member.name}</Link>
                  </h4>
                  <p>{member.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Team;
