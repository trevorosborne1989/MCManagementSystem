package com.lightfeather.LFManagementSystem.model.pojo;

import lombok.*;

import javax.validation.constraints.NotEmpty;
import java.io.Serializable;

/**
 * POJO representing an Employee.
 *
 * @author Trevor Osborne
 */
@Data
@Getter
@Setter
@EqualsAndHashCode
@RequiredArgsConstructor
public class Employee implements Serializable {

    private Long id;

    @NotEmpty
    private String firstName;

    @NotEmpty
    private String lastName;

    private String email;

    private String phoneNumber;

    @NotEmpty
    private String supervisor;

}
