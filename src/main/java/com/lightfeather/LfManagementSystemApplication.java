package com.lightfeather;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.lightfeather.LFManagementSystem.model.pojo.Supervisor;
import com.lightfeather.LFManagementSystem.model.spi.SupervisorRepository;
import com.lightfeather.LFManagementSystem.rest.SupervisorController;
import net.minidev.json.JSONArray;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.List;

@SpringBootApplication
@ComponentScan("com.lightfeather.LFManagementSystem.model.spi")
@ComponentScan(basePackageClasses = SupervisorController.class)
@EntityScan("com/lightfeather/LFManagementSystem/model/pojo")
@EnableJpaRepositories("com.lightfeather.LFManagementSystem.model.spi")
public class LfManagementSystemApplication implements CommandLineRunner {


	public static void main(String[] args) {
		SpringApplication.run(LfManagementSystemApplication.class, args);}

	@Autowired
	private SupervisorRepository supervisorRepository;

	@Override
	public void run(String... args) throws Exception {
		RestTemplate restTemplate = new RestTemplate();
		String url = "https://o3m5qixdng.execute-api.us-east-1.amazonaws.com/api/managers";
		Supervisor[] supervisorsArray = restTemplate.getForObject(url, Supervisor[].class);

		ObjectMapper mapper = new ObjectMapper();
		List<Supervisor> supervisors = mapper.readValue(JSONArray.toJSONString(Arrays.asList(supervisorsArray)),
				new TypeReference<List<Supervisor>>(){});

		System.out.println("\nInitializing H2 with these supervisors: \n");
		supervisors.forEach(System.out::println);

		supervisorRepository.saveAll(supervisors);
		System.out.println("\nSupervisors successfully loaded.\n");

		System.out.println("Fetching loaded supervisors from H2 repository...\n");
		supervisorRepository.findAll().forEach(System.out::println);

	}
}
