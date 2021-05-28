package com.watch.fing.dbp_proyecto3;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.util.Log;
import android.widget.TextView;

import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.StringRequest;
import com.android.volley.toolbox.Volley;
import com.google.gson.Gson;
import com.watch.fing.dbp_proyecto3.personC.personC;

public class melissa extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.design_m);

        final TextView name = findViewById(R.id.textViewName);
        final TextView bio = findViewById(R.id.textViewBio);
        final TextView studies = findViewById(R.id.textViewStudies);
        final TextView list = findViewById(R.id.textViewList);

        RequestQueue queue = Volley.newRequestQueue(this);
        String url = "https://curriculum-vitae-debapla.herokuapp.com/334259";

        StringRequest sr = new StringRequest(Request.Method.GET,url,new Response.Listener<String>(){
            @Override
            public void onResponse( String response){
                personC person = new Gson().fromJson(response.toString(), personC.class);
                name.setText(person.name);
                bio.setText(person.bio);
                studies.setText(person.studies);
                list.setText(person.list);
            }
        }, new Response.ErrorListener(){
            @Override
            public void onErrorResponse(VolleyError error){
                Log.e("weather-request-error",error.getMessage());
            }
        });
        queue.add(sr);
    }
}