let 

if (filterText && filterText !== "") {
    const projectsFilteredByName = projects.filter((project) => {
      return (
        project.projectType?.some(({ name }) =>
          name.toLowerCase().includes("nfts")
        ) && project.name.toLowerCase().includes(filterText.toLocaleLowerCase())
      );
    });
    if (projectsFilteredByName.length > 0) {
      projectsFilteredByNameElements = projectsFilteredByName.map((project) => {
        return (
          <ListProjectBox
            key={project._id}
            name={project.name}
            image={`${BASEURL}/projects/${project._id}/image`}
            status={project.mintStatus && project.mintStatus.name}
            type={project.projectType.name}
            mintDate={project.publicMintDate}
            onClicked={goToDetailPage}
          />
        );
      });
    } else {
      projectsFilteredByNameElements = null;
    }
  }