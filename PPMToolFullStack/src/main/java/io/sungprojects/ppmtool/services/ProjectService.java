package io.sungprojects.ppmtool.services;

import io.sungprojects.ppmtool.domain.Project;
import io.sungprojects.ppmtool.repositories.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProjectService {

    @Autowired
    private ProjectRepository projectRepository;

    public Project saveOrUpdate(Project project) {

        // Logic

        return projectRepository.save(project);
    }

}
