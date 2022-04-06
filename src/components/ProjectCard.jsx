import { useState, useEffect } from 'react';
import useApiCall from '../hooks/useApiCall';
import Skeleton from '../loaders/Skeleton';
import { Icon } from '@iconify/react';

const ProjectCard = () => {
  const [projects, setProjects] = useState({
    loading: true,
    template: false,
  });

  const { data } = useApiCall(
    'https://api.github.com/users/awakatedev/repos',
    'GET',
  );
  const { object } = data;

  useEffect(async () => {
    const cards = [];
    object &&
      object.forEach(async (card) => {
        const credentials = btoa(
          'awakatedev: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',
        );
        const responseImg = await fetch(
          `https://api.github.com/repos/awakatedev/${card.name}/contents/.img/img.jpg`,
          {
            method: 'GET',
            headers: {
              Authorization: `Basic ${credentials}`,
            },
          },
        );
        const responseCollab = await fetch(
          `https://api.github.com/repos/awakatedev/${card.name}/contributors`,
          {
            method: 'GET',
            headers: {
              Authorization: `Basic ${credentials}`,
            },
          },
        );
        const elementImg = await responseImg.json();
        const elementCollab = await responseCollab.json();
        if (responseImg) {
          const collabImg = elementCollab.map(({ avatar_url }) => (
            <img src={avatar_url} />
          ));
          console.log(collabImg);
          // if (responseImg) {
          const topics = card.topics.map((topic) => <i>{[...topic, '  ']}</i>);
          // console.log(topics)
          const templateCard = {
            projectImg: elementImg.content,
            projectName: card.name,
            projectStars: card.stargazers_count,
            projectDescription: card.description,
            projectTopics: topics,
            projectUpdated: card.updated_at,
            projectCollabs: collabImg,
            projectUrl: card.html_url,
          };
          cards.push(templateCard);

          setProjects({
            ...projects,
            template: cards,
            loading: false,
          });
        }
      });
  }, [object]);

  if (projects.loading) {
    return (
      <>
        <Skeleton type="card" />
        <Skeleton type="card" />
        <Skeleton type="card" />
      </>
    );
  } else if (!projects.loading) {
    const renderCards =
      !projects.template === false &&
      projects.template.map(
        ({
          projectImg,
          projectName,
          projectStars,
          projectDescription,
          projectTopics,
          projectUpdated,
          projectCollabs,
          projectUrl,
        }) => (
          <article className="project">
            <section className="project--show">
              <img src={`data:image/jpg;base64, ${projectImg}`} />
            </section>
            <section className="project--data">
              <div className="project--data__top">
                <h4>{projectName}</h4>
                <i>
                  <Icon icon="ant-design:star-filled" />
                  {projectStars}
                </i>
              </div>
              <div className="project--data__middle">
                <i>{projectUpdated}</i>
                <div className="topicsContainer">{projectTopics}</div>
                <p>{projectDescription}</p>
              </div>
              <div className="project--data__bottom">
                <div className="collabs">{projectCollabs}</div>
                <button className="btn__hover">
                  <a href={projectUrl}>Repository</a>
                </button>
              </div>
            </section>
          </article>
        ),
      );
    return renderCards;
  } else {
    return <p>nono</p>;
  }
};
export default ProjectCard;
