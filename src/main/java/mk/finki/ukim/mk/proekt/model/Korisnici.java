package mk.finki.ukim.mk.proekt.model;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@Data

public class Korisnici {

    @Id
    private Long id;

    private String ime;
    private String prezime;
    private String username;
    private String password;
    private String email;


    public Korisnici() {
    }

    public Korisnici(String ime, String prezime, String email, String username, String password) {
        this.ime = ime;
        this.prezime = prezime;
        this.email = email;
        this.username = username;
        this.password = password;
    }

    public String getPassword() {
        return password;
    }
}
