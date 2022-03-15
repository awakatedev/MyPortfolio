import { useState, useEffect } from 'react';
import useApiCall from '../hooks/useApiCall';
import Skeleton from '../loaders/Skeleton';
import { Icon } from '@iconify/react';

const ProjectCard = () => {
  const [loading, setLoading] = useState(true);
  const [img, setImg] = useState();
  const { data } = useApiCall(
    'https://api.github.com/users/awakatedev/repos',
    'GET',
    'token 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',
  );
  console.log(data);
  const { object } = data;
  // console.log(cardData);
  useEffect(async () => {
    (await object) ? setLoading(false) : setLoading(true);
    // }, [object]);

    const response = object.map(
      async ({ name }) =>
        await fetch(
          `https://api.github.com/repos/awakatedev/${name}/contents/.img/img.jpg`,
        ),
    );
    const element = await response.json();
    console.log(element);
    setImg(element);
  }, [object]);
  console.log(img);
  const render =
    loading === true ? (
      <>
        <Skeleton type="card" />
        <Skeleton type="card" />
        <Skeleton type="card" />
      </>
    ) : (
      object.map(
        ({
          name,
          stargazers_count,
          description,
          topics,
          updated_at,
          html_url,
        }) => (
          <article className="project">
            <section className="project--show">
              <img src={`data:image/jpg;base64,${img}`} />
            </section>
            <section className="project--data">
              <div>
                <h4>{name}</h4> <i>{updated_at}</i>
              </div>
              <div>
                <i>
                  <Icon icon="ant-design:star-filled" />
                  {stargazers_count}
                </i>
                <i>{topics}</i>
                <p>{description}</p>
              </div>
              <div>
                <button>
                  <a href={html_url}>Repository</a>
                </button>
              </div>
            </section>
          </article>
        ),
      )
    );

  return render;
};
export default ProjectCard;
