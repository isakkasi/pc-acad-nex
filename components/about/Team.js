import Link from 'next/link';

const Team = () => {
  const team = [
    {
      img: 'vmih.jpeg',
      name: 'Viktor Mihaylov',
      position: 'CEO & Founder',
      facebook: '',
      twitter: '',
      linkedin: 'https://www.linkedin.com/in/viktor-mihaylov-387a0549/',
      pinterest: '',
    },
    {
      img: 'ageo.jpeg',
      name: 'Aleksandar Georgiev',
      position: 'Training Manager & Founder',
      facebook: '',
      twitter: '',
      linkedin: 'https://www.linkedin.com/in/aleksandar-georgiev-b09006a5/',
      pinterest: '',
    },
    {
      img: 'zzhe.jpeg',
      name: 'Jivomir Jelev',
      position: 'Examination Manager & Founder',
      facebook: '',
      twitter: '',
      linkedin: 'https://www.linkedin.com/in/zhivomir-zhelev-91743758/',
      pinterest: '',
    },
    {
      img: 'team_placeholder.jpg',
      name: 'Yoana Ivanova',
      position: 'Quality Manager',
      facebook: '',
      twitter: '',
      linkedin: 'https://www.linkedin.com/in/yoana-ivanova-3b61b3152/',
      pinterest: '',
    },
  ];

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
