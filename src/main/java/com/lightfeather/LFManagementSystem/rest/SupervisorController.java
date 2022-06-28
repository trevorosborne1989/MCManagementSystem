package com.lightfeather.LFManagementSystem.rest;

import com.lightfeather.LFManagementSystem.model.pojo.Employee;
import com.lightfeather.LFManagementSystem.model.pojo.Supervisor;
import com.lightfeather.LFManagementSystem.model.spi.SupervisorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("/api")
public class SupervisorController {

    @Autowired
    private SupervisorRepository supervisorRepository;

    @GetMapping(path = "/supervisors")
    public List<Supervisor> getAll() {
        return supervisorRepository.findAll(Sort.by("jurisdiction").ascending().and(Sort.by("lastName")
                .ascending()).and(Sort.by("firstName").ascending()));
    }

    @PostMapping(path = "/submit")
    public void save(@Valid @ModelAttribute Employee employee) {

        System.out.println("Notifications from Supervisor: " + employee.getSupervisor() + " will now be sent to: "
                + employee.getFirstName() + " " + employee.getLastName() + " " + employee.getEmail() + " "
                + employee.getPhoneNumber());
    }
}
