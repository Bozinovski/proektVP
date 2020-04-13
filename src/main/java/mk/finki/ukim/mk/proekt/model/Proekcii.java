package mk.finki.ukim.mk.proekt.model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@Data
public class Proekcii {

    @Id
    private Long id;

    private Long filmId;
    private Long salaId;

    public Proekcii(){};
    public Proekcii(Long filmid, Long salaId){
        this.filmId = filmid;
        this.salaId = salaId;
    }



}