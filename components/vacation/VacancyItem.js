function VacancyItem({
  img,
  company,
  newVacancy,
  location,
  featured,
  position,
  postedAt,
  contract,
  role,
  level,
  languages,
  tools,
  handleClickCategory,
}) {
  const tags = [role, level, ...languages, ...tools];
  return (
    <div>
      <div className="blocks">
        <div className="blocksTools">
          <img className="blocksToolsPictures" src={img} alt="img"/>
          <div className="blocksToolsDescription">
            <div className="blocksToolsDescriptionHead">
              <p className="blocksToolsDescriptionHeadСompany">{company}</p>
              {newVacancy && (
                <p className="blocksToolsDescriptionHeadNew">NEW!</p>
              )}
              {featured && (
                <p className="blocksToolsDescriptionHeadFeatured">FEATURED!</p>
              )}
            </div>
            <p className="blocksToolsDescriptionPosition">{position}</p>
            <div className="blocksToolsDescriptionFooter">
              <p className="blocksToolsDescriptionFooterPostedAt">{postedAt}</p>
              <p className="point">&bull;</p>
              <p className="blocksToolsDescriptionFooterContract">{contract}</p>
              <p className="point">&bull;</p>
              <p className="blocksToolsDescriptionFooterLocation">{location}</p>
            </div>
          </div>
        </div>
        <div className="blocksTags">
          {tags.map((el) => (
            <div
              className="blocksToolsLanguageItem"
              onClick={() => handleClickCategory(el)}
            >
              {el}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default VacancyItem;
