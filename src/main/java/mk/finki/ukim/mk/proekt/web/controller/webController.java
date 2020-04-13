package mk.finki.ukim.mk.proekt.web.controller;

import mk.finki.ukim.mk.proekt.model.*;
import mk.finki.ukim.mk.proekt.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class webController {

    @Autowired
    FilmoviRepository filmoviRepository;

    @Autowired
    KinoSaliRepository kinoSaliRepository;

    @Autowired
    KorisniciRepository korisniciRepository;

    @Autowired
    ProekciiRepository proekciiRepository;

    @Autowired
    RezervaciiRepository rezervaciiRepository;

    @RequestMapping(value = "/filmovi", method = RequestMethod.POST)
    public void addMovie(@RequestParam String imeNaFilm, @RequestParam String vremetraenje, @RequestParam String zanr) {
        Filmovi film = new Filmovi(imeNaFilm, vremetraenje, zanr);

        filmoviRepository.save(film);
    }

    @RequestMapping(value = "/registracija", method = RequestMethod.POST)
    public void addKorisnici(@RequestParam String ime, @RequestParam String prezime, @RequestParam String email, @RequestParam String username,@RequestParam String password) {
        Korisnici korisnci = new Korisnici(ime, prezime,email, username, password);

        korisniciRepository.save(korisnci);
    }
    @RequestMapping(value = "/najava", method = RequestMethod.POST)
    public boolean findKorisnik( @RequestParam String username,@RequestParam String password) {
        Korisnici korisnici=korisniciRepository.findByUsername(username);

        if(korisnici.getPassword().equals(password)){
            return true;
        }
        else
            return false;

    }
    @RequestMapping(value = "/sala", method = RequestMethod.POST)
    public void addSala(@RequestParam String imeNaSala, @RequestParam int brSedista) {
        KinoSali kinoSali = new KinoSali(imeNaSala, brSedista);
        kinoSaliRepository.save(kinoSali);
    }

    @RequestMapping(value = "/filmovi", method = RequestMethod.GET)
    public List<Filmovi> getAllFilmovi() {

        return filmoviRepository.findAll();
    }

    @RequestMapping(value = "/korisnici", method = RequestMethod.GET)
    public List<Korisnici> getAllKorisnici() {

        return korisniciRepository.findAll();
    }

    @RequestMapping(value = "/sala", method = RequestMethod.GET)
    public List<KinoSali> getAllSala() {

        return kinoSaliRepository.findAll();
    }

    @RequestMapping(value = "/proekcii", method = RequestMethod.POST)
    public void addProekcii(@RequestParam Long filmId, @RequestParam Long salaId) {
        Proekcii proekcii =new Proekcii(filmId,salaId);
        proekciiRepository.save(proekcii);
    }

    @RequestMapping(value = "/rezervacii", method = RequestMethod.POST)
    public void addRezervacija(@RequestParam Long proekcijaId,@RequestParam Long korisnikId){
        Rezervacii rezervacii =new Rezervacii(proekcijaId,korisnikId);
        rezervaciiRepository.save(rezervacii);
    }

    @RequestMapping(value = "/proekcii", method = RequestMethod.GET)
    public List<Proekcii> getAllProekcii() {

        return proekciiRepository.findAll();
    }

    @RequestMapping(value = "/rezervacii", method = RequestMethod.GET)
    public List<Rezervacii> getAllRezervacii() {

        return rezervaciiRepository.findAll();
    }



}

