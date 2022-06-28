package com.lightfeather.LFManagementSystem.model.spi;

import com.lightfeather.LFManagementSystem.model.pojo.Supervisor;
import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;


/**
 * Spring data repository for {@link Supervisor} objects.
 *
 * @author Trevor Osborne
 */
@Repository
@Component
public interface SupervisorRepository extends JpaRepository<Supervisor, Long> {

}
