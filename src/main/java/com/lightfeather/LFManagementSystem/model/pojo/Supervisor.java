package com.lightfeather.LFManagementSystem.model.pojo;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;
import java.io.Serializable;

/**
 * POJO representing a Supervisor.
 *
 * @author Trevor Osborne
 */
@Entity
@Table(name = "supervisors")
@Data
@Getter
@Setter
@EqualsAndHashCode
@RequiredArgsConstructor
public class Supervisor implements Serializable {
    @Id
    @Column(name="id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="phone")
    @Size(max = 14, min = 10)
    @Schema(example= "(760) 413-5897")
    private String phone;

    @Column(name="jurisdiction")
    @Size(max = 12)
    @Schema(example= "u")
    private String jurisdiction;

    @Column(name="identification_number")
    private String identificationNumber;

    @Column(name="first_name")
    private String firstName;

    @Column(name="last_name")
    private String lastName;
}

