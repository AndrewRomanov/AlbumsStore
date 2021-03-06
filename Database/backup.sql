PGDMP     "    ;        	        x            testProjectDB    12.3    12.3 A    h           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            i           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            j           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            k           1262    16912    testProjectDB    DATABASE     �   CREATE DATABASE "testProjectDB" WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'Russian_Russia.1251' LC_CTYPE = 'Russian_Russia.1251';
    DROP DATABASE "testProjectDB";
                postgres    false            �            1259    17019    Albums    TABLE     �   CREATE TABLE public."Albums" (
    "Id" integer NOT NULL,
    "Name" text NOT NULL,
    "Price" real NOT NULL,
    "GroupName" text NOT NULL,
    "GenreId" integer DEFAULT 0 NOT NULL
);
    DROP TABLE public."Albums";
       public         heap    postgres    false            �            1259    17017    Albums_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."Albums_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public."Albums_Id_seq";
       public          postgres    false    213            l           0    0    Albums_Id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public."Albums_Id_seq" OWNED BY public."Albums"."Id";
          public          postgres    false    212            �            1259    16936    AspNetRoleClaims    TABLE     �   CREATE TABLE public."AspNetRoleClaims" (
    "Id" integer NOT NULL,
    "RoleId" text NOT NULL,
    "ClaimType" text,
    "ClaimValue" text
);
 &   DROP TABLE public."AspNetRoleClaims";
       public         heap    postgres    false            �            1259    16934    AspNetRoleClaims_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."AspNetRoleClaims_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public."AspNetRoleClaims_Id_seq";
       public          postgres    false    206            m           0    0    AspNetRoleClaims_Id_seq    SEQUENCE OWNED BY     Y   ALTER SEQUENCE public."AspNetRoleClaims_Id_seq" OWNED BY public."AspNetRoleClaims"."Id";
          public          postgres    false    205            �            1259    16918    AspNetRoles    TABLE     �   CREATE TABLE public."AspNetRoles" (
    "Id" text NOT NULL,
    "Name" character varying(256),
    "NormalizedName" character varying(256),
    "ConcurrencyStamp" text
);
 !   DROP TABLE public."AspNetRoles";
       public         heap    postgres    false            �            1259    16952    AspNetUserClaims    TABLE     �   CREATE TABLE public."AspNetUserClaims" (
    "Id" integer NOT NULL,
    "UserId" text NOT NULL,
    "ClaimType" text,
    "ClaimValue" text
);
 &   DROP TABLE public."AspNetUserClaims";
       public         heap    postgres    false            �            1259    16950    AspNetUserClaims_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."AspNetUserClaims_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public."AspNetUserClaims_Id_seq";
       public          postgres    false    208            n           0    0    AspNetUserClaims_Id_seq    SEQUENCE OWNED BY     Y   ALTER SEQUENCE public."AspNetUserClaims_Id_seq" OWNED BY public."AspNetUserClaims"."Id";
          public          postgres    false    207            �            1259    16966    AspNetUserLogins    TABLE     �   CREATE TABLE public."AspNetUserLogins" (
    "LoginProvider" text NOT NULL,
    "ProviderKey" text NOT NULL,
    "ProviderDisplayName" text,
    "UserId" text NOT NULL
);
 &   DROP TABLE public."AspNetUserLogins";
       public         heap    postgres    false            �            1259    16979    AspNetUserRoles    TABLE     b   CREATE TABLE public."AspNetUserRoles" (
    "UserId" text NOT NULL,
    "RoleId" text NOT NULL
);
 %   DROP TABLE public."AspNetUserRoles";
       public         heap    postgres    false            �            1259    16997    AspNetUserTokens    TABLE     �   CREATE TABLE public."AspNetUserTokens" (
    "UserId" text NOT NULL,
    "LoginProvider" text NOT NULL,
    "Name" text NOT NULL,
    "Value" text
);
 &   DROP TABLE public."AspNetUserTokens";
       public         heap    postgres    false            �            1259    16926    AspNetUsers    TABLE     �  CREATE TABLE public."AspNetUsers" (
    "Id" text NOT NULL,
    "UserName" character varying(256),
    "NormalizedUserName" character varying(256),
    "Email" character varying(256),
    "NormalizedEmail" character varying(256),
    "EmailConfirmed" boolean NOT NULL,
    "PasswordHash" text,
    "SecurityStamp" text,
    "ConcurrencyStamp" text,
    "PhoneNumber" text,
    "PhoneNumberConfirmed" boolean NOT NULL,
    "TwoFactorEnabled" boolean NOT NULL,
    "LockoutEnd" timestamp with time zone,
    "LockoutEnabled" boolean NOT NULL,
    "AccessFailedCount" integer NOT NULL,
    "Discriminator" text NOT NULL,
    "FullName" text
);
 !   DROP TABLE public."AspNetUsers";
       public         heap    postgres    false            �            1259    17030    Genres    TABLE     o   CREATE TABLE public."Genres" (
    "Id" integer NOT NULL,
    "Name" text NOT NULL,
    "Desctription" text
);
    DROP TABLE public."Genres";
       public         heap    postgres    false            �            1259    17028    Genres_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."Genres_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public."Genres_Id_seq";
       public          postgres    false    215            o           0    0    Genres_Id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public."Genres_Id_seq" OWNED BY public."Genres"."Id";
          public          postgres    false    214            �            1259    16913    __EFMigrationsHistory    TABLE     �   CREATE TABLE public."__EFMigrationsHistory" (
    "MigrationId" character varying(150) NOT NULL,
    "ProductVersion" character varying(32) NOT NULL
);
 +   DROP TABLE public."__EFMigrationsHistory";
       public         heap    postgres    false            �
           2604    17022 	   Albums Id    DEFAULT     l   ALTER TABLE ONLY public."Albums" ALTER COLUMN "Id" SET DEFAULT nextval('public."Albums_Id_seq"'::regclass);
 <   ALTER TABLE public."Albums" ALTER COLUMN "Id" DROP DEFAULT;
       public          postgres    false    212    213    213            �
           2604    16939    AspNetRoleClaims Id    DEFAULT     �   ALTER TABLE ONLY public."AspNetRoleClaims" ALTER COLUMN "Id" SET DEFAULT nextval('public."AspNetRoleClaims_Id_seq"'::regclass);
 F   ALTER TABLE public."AspNetRoleClaims" ALTER COLUMN "Id" DROP DEFAULT;
       public          postgres    false    206    205    206            �
           2604    16955    AspNetUserClaims Id    DEFAULT     �   ALTER TABLE ONLY public."AspNetUserClaims" ALTER COLUMN "Id" SET DEFAULT nextval('public."AspNetUserClaims_Id_seq"'::regclass);
 F   ALTER TABLE public."AspNetUserClaims" ALTER COLUMN "Id" DROP DEFAULT;
       public          postgres    false    207    208    208            �
           2604    17033 	   Genres Id    DEFAULT     l   ALTER TABLE ONLY public."Genres" ALTER COLUMN "Id" SET DEFAULT nextval('public."Genres_Id_seq"'::regclass);
 <   ALTER TABLE public."Genres" ALTER COLUMN "Id" DROP DEFAULT;
       public          postgres    false    214    215    215            c          0    17019    Albums 
   TABLE DATA           Q   COPY public."Albums" ("Id", "Name", "Price", "GroupName", "GenreId") FROM stdin;
    public          postgres    false    213   Q       \          0    16936    AspNetRoleClaims 
   TABLE DATA           W   COPY public."AspNetRoleClaims" ("Id", "RoleId", "ClaimType", "ClaimValue") FROM stdin;
    public          postgres    false    206   +T       Y          0    16918    AspNetRoles 
   TABLE DATA           [   COPY public."AspNetRoles" ("Id", "Name", "NormalizedName", "ConcurrencyStamp") FROM stdin;
    public          postgres    false    203   HT       ^          0    16952    AspNetUserClaims 
   TABLE DATA           W   COPY public."AspNetUserClaims" ("Id", "UserId", "ClaimType", "ClaimValue") FROM stdin;
    public          postgres    false    208   eT       _          0    16966    AspNetUserLogins 
   TABLE DATA           m   COPY public."AspNetUserLogins" ("LoginProvider", "ProviderKey", "ProviderDisplayName", "UserId") FROM stdin;
    public          postgres    false    209   �T       `          0    16979    AspNetUserRoles 
   TABLE DATA           ?   COPY public."AspNetUserRoles" ("UserId", "RoleId") FROM stdin;
    public          postgres    false    210   �T       a          0    16997    AspNetUserTokens 
   TABLE DATA           X   COPY public."AspNetUserTokens" ("UserId", "LoginProvider", "Name", "Value") FROM stdin;
    public          postgres    false    211   �T       Z          0    16926    AspNetUsers 
   TABLE DATA           ?  COPY public."AspNetUsers" ("Id", "UserName", "NormalizedUserName", "Email", "NormalizedEmail", "EmailConfirmed", "PasswordHash", "SecurityStamp", "ConcurrencyStamp", "PhoneNumber", "PhoneNumberConfirmed", "TwoFactorEnabled", "LockoutEnd", "LockoutEnabled", "AccessFailedCount", "Discriminator", "FullName") FROM stdin;
    public          postgres    false    204   �T       e          0    17030    Genres 
   TABLE DATA           @   COPY public."Genres" ("Id", "Name", "Desctription") FROM stdin;
    public          postgres    false    215   �U       X          0    16913    __EFMigrationsHistory 
   TABLE DATA           R   COPY public."__EFMigrationsHistory" ("MigrationId", "ProductVersion") FROM stdin;
    public          postgres    false    202   DV       p           0    0    Albums_Id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public."Albums_Id_seq"', 40, true);
          public          postgres    false    212            q           0    0    AspNetRoleClaims_Id_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public."AspNetRoleClaims_Id_seq"', 1, false);
          public          postgres    false    205            r           0    0    AspNetUserClaims_Id_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public."AspNetUserClaims_Id_seq"', 1, false);
          public          postgres    false    207            s           0    0    Genres_Id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public."Genres_Id_seq"', 5, true);
          public          postgres    false    214            �
           2606    17027    Albums PK_Albums 
   CONSTRAINT     T   ALTER TABLE ONLY public."Albums"
    ADD CONSTRAINT "PK_Albums" PRIMARY KEY ("Id");
 >   ALTER TABLE ONLY public."Albums" DROP CONSTRAINT "PK_Albums";
       public            postgres    false    213            �
           2606    16944 $   AspNetRoleClaims PK_AspNetRoleClaims 
   CONSTRAINT     h   ALTER TABLE ONLY public."AspNetRoleClaims"
    ADD CONSTRAINT "PK_AspNetRoleClaims" PRIMARY KEY ("Id");
 R   ALTER TABLE ONLY public."AspNetRoleClaims" DROP CONSTRAINT "PK_AspNetRoleClaims";
       public            postgres    false    206            �
           2606    16925    AspNetRoles PK_AspNetRoles 
   CONSTRAINT     ^   ALTER TABLE ONLY public."AspNetRoles"
    ADD CONSTRAINT "PK_AspNetRoles" PRIMARY KEY ("Id");
 H   ALTER TABLE ONLY public."AspNetRoles" DROP CONSTRAINT "PK_AspNetRoles";
       public            postgres    false    203            �
           2606    16960 $   AspNetUserClaims PK_AspNetUserClaims 
   CONSTRAINT     h   ALTER TABLE ONLY public."AspNetUserClaims"
    ADD CONSTRAINT "PK_AspNetUserClaims" PRIMARY KEY ("Id");
 R   ALTER TABLE ONLY public."AspNetUserClaims" DROP CONSTRAINT "PK_AspNetUserClaims";
       public            postgres    false    208            �
           2606    16973 $   AspNetUserLogins PK_AspNetUserLogins 
   CONSTRAINT     �   ALTER TABLE ONLY public."AspNetUserLogins"
    ADD CONSTRAINT "PK_AspNetUserLogins" PRIMARY KEY ("LoginProvider", "ProviderKey");
 R   ALTER TABLE ONLY public."AspNetUserLogins" DROP CONSTRAINT "PK_AspNetUserLogins";
       public            postgres    false    209    209            �
           2606    16986 "   AspNetUserRoles PK_AspNetUserRoles 
   CONSTRAINT     t   ALTER TABLE ONLY public."AspNetUserRoles"
    ADD CONSTRAINT "PK_AspNetUserRoles" PRIMARY KEY ("UserId", "RoleId");
 P   ALTER TABLE ONLY public."AspNetUserRoles" DROP CONSTRAINT "PK_AspNetUserRoles";
       public            postgres    false    210    210            �
           2606    17004 $   AspNetUserTokens PK_AspNetUserTokens 
   CONSTRAINT     �   ALTER TABLE ONLY public."AspNetUserTokens"
    ADD CONSTRAINT "PK_AspNetUserTokens" PRIMARY KEY ("UserId", "LoginProvider", "Name");
 R   ALTER TABLE ONLY public."AspNetUserTokens" DROP CONSTRAINT "PK_AspNetUserTokens";
       public            postgres    false    211    211    211            �
           2606    16933    AspNetUsers PK_AspNetUsers 
   CONSTRAINT     ^   ALTER TABLE ONLY public."AspNetUsers"
    ADD CONSTRAINT "PK_AspNetUsers" PRIMARY KEY ("Id");
 H   ALTER TABLE ONLY public."AspNetUsers" DROP CONSTRAINT "PK_AspNetUsers";
       public            postgres    false    204            �
           2606    17038    Genres PK_Genres 
   CONSTRAINT     T   ALTER TABLE ONLY public."Genres"
    ADD CONSTRAINT "PK_Genres" PRIMARY KEY ("Id");
 >   ALTER TABLE ONLY public."Genres" DROP CONSTRAINT "PK_Genres";
       public            postgres    false    215            �
           2606    16917 .   __EFMigrationsHistory PK___EFMigrationsHistory 
   CONSTRAINT     {   ALTER TABLE ONLY public."__EFMigrationsHistory"
    ADD CONSTRAINT "PK___EFMigrationsHistory" PRIMARY KEY ("MigrationId");
 \   ALTER TABLE ONLY public."__EFMigrationsHistory" DROP CONSTRAINT "PK___EFMigrationsHistory";
       public            postgres    false    202            �
           1259    17015 
   EmailIndex    INDEX     S   CREATE INDEX "EmailIndex" ON public."AspNetUsers" USING btree ("NormalizedEmail");
     DROP INDEX public."EmailIndex";
       public            postgres    false    204            �
           1259    17041    IX_Albums_GenreId    INDEX     M   CREATE INDEX "IX_Albums_GenreId" ON public."Albums" USING btree ("GenreId");
 '   DROP INDEX public."IX_Albums_GenreId";
       public            postgres    false    213            �
           1259    17010    IX_AspNetRoleClaims_RoleId    INDEX     _   CREATE INDEX "IX_AspNetRoleClaims_RoleId" ON public."AspNetRoleClaims" USING btree ("RoleId");
 0   DROP INDEX public."IX_AspNetRoleClaims_RoleId";
       public            postgres    false    206            �
           1259    17012    IX_AspNetUserClaims_UserId    INDEX     _   CREATE INDEX "IX_AspNetUserClaims_UserId" ON public."AspNetUserClaims" USING btree ("UserId");
 0   DROP INDEX public."IX_AspNetUserClaims_UserId";
       public            postgres    false    208            �
           1259    17013    IX_AspNetUserLogins_UserId    INDEX     _   CREATE INDEX "IX_AspNetUserLogins_UserId" ON public."AspNetUserLogins" USING btree ("UserId");
 0   DROP INDEX public."IX_AspNetUserLogins_UserId";
       public            postgres    false    209            �
           1259    17014    IX_AspNetUserRoles_RoleId    INDEX     ]   CREATE INDEX "IX_AspNetUserRoles_RoleId" ON public."AspNetUserRoles" USING btree ("RoleId");
 /   DROP INDEX public."IX_AspNetUserRoles_RoleId";
       public            postgres    false    210            �
           1259    17011    RoleNameIndex    INDEX     \   CREATE UNIQUE INDEX "RoleNameIndex" ON public."AspNetRoles" USING btree ("NormalizedName");
 #   DROP INDEX public."RoleNameIndex";
       public            postgres    false    203            �
           1259    17016    UserNameIndex    INDEX     `   CREATE UNIQUE INDEX "UserNameIndex" ON public."AspNetUsers" USING btree ("NormalizedUserName");
 #   DROP INDEX public."UserNameIndex";
       public            postgres    false    204            �
           2606    17042    Albums FK_Albums_Genres_GenreId    FK CONSTRAINT     �   ALTER TABLE ONLY public."Albums"
    ADD CONSTRAINT "FK_Albums_Genres_GenreId" FOREIGN KEY ("GenreId") REFERENCES public."Genres"("Id") ON DELETE CASCADE;
 M   ALTER TABLE ONLY public."Albums" DROP CONSTRAINT "FK_Albums_Genres_GenreId";
       public          postgres    false    2770    213    215            �
           2606    16945 7   AspNetRoleClaims FK_AspNetRoleClaims_AspNetRoles_RoleId    FK CONSTRAINT     �   ALTER TABLE ONLY public."AspNetRoleClaims"
    ADD CONSTRAINT "FK_AspNetRoleClaims_AspNetRoles_RoleId" FOREIGN KEY ("RoleId") REFERENCES public."AspNetRoles"("Id") ON DELETE CASCADE;
 e   ALTER TABLE ONLY public."AspNetRoleClaims" DROP CONSTRAINT "FK_AspNetRoleClaims_AspNetRoles_RoleId";
       public          postgres    false    206    203    2746            �
           2606    16961 7   AspNetUserClaims FK_AspNetUserClaims_AspNetUsers_UserId    FK CONSTRAINT     �   ALTER TABLE ONLY public."AspNetUserClaims"
    ADD CONSTRAINT "FK_AspNetUserClaims_AspNetUsers_UserId" FOREIGN KEY ("UserId") REFERENCES public."AspNetUsers"("Id") ON DELETE CASCADE;
 e   ALTER TABLE ONLY public."AspNetUserClaims" DROP CONSTRAINT "FK_AspNetUserClaims_AspNetUsers_UserId";
       public          postgres    false    2750    204    208            �
           2606    16974 7   AspNetUserLogins FK_AspNetUserLogins_AspNetUsers_UserId    FK CONSTRAINT     �   ALTER TABLE ONLY public."AspNetUserLogins"
    ADD CONSTRAINT "FK_AspNetUserLogins_AspNetUsers_UserId" FOREIGN KEY ("UserId") REFERENCES public."AspNetUsers"("Id") ON DELETE CASCADE;
 e   ALTER TABLE ONLY public."AspNetUserLogins" DROP CONSTRAINT "FK_AspNetUserLogins_AspNetUsers_UserId";
       public          postgres    false    204    209    2750            �
           2606    16987 5   AspNetUserRoles FK_AspNetUserRoles_AspNetRoles_RoleId    FK CONSTRAINT     �   ALTER TABLE ONLY public."AspNetUserRoles"
    ADD CONSTRAINT "FK_AspNetUserRoles_AspNetRoles_RoleId" FOREIGN KEY ("RoleId") REFERENCES public."AspNetRoles"("Id") ON DELETE CASCADE;
 c   ALTER TABLE ONLY public."AspNetUserRoles" DROP CONSTRAINT "FK_AspNetUserRoles_AspNetRoles_RoleId";
       public          postgres    false    210    2746    203            �
           2606    16992 5   AspNetUserRoles FK_AspNetUserRoles_AspNetUsers_UserId    FK CONSTRAINT     �   ALTER TABLE ONLY public."AspNetUserRoles"
    ADD CONSTRAINT "FK_AspNetUserRoles_AspNetUsers_UserId" FOREIGN KEY ("UserId") REFERENCES public."AspNetUsers"("Id") ON DELETE CASCADE;
 c   ALTER TABLE ONLY public."AspNetUserRoles" DROP CONSTRAINT "FK_AspNetUserRoles_AspNetUsers_UserId";
       public          postgres    false    204    210    2750            �
           2606    17005 7   AspNetUserTokens FK_AspNetUserTokens_AspNetUsers_UserId    FK CONSTRAINT     �   ALTER TABLE ONLY public."AspNetUserTokens"
    ADD CONSTRAINT "FK_AspNetUserTokens_AspNetUsers_UserId" FOREIGN KEY ("UserId") REFERENCES public."AspNetUsers"("Id") ON DELETE CASCADE;
 e   ALTER TABLE ONLY public."AspNetUserTokens" DROP CONSTRAINT "FK_AspNetUserTokens_AspNetUsers_UserId";
       public          postgres    false    204    2750    211            c     x�uT�r�8<��=��|�zMɖ[�JR9U����B	� �D���HI��!7�3��=����Q_�tbk�Z�Q�����,S��Z:UY�L�n��|�ЄV�M�w@����4�AmM���C���V�;��P=Xi��R��U��r��\�6|f����Y�2��T�(eM��θ��R8hkM���L[��ÅԠQJL�裚�5j-��N���jU�4���XG0���Teږ��4zM�W�ƣ�k�6zw��"�ԛ鮬�CZuk�y��u�$��t�?s�P���#�u��'٘^T\���|Oh|w-��Yn����o=�������:�ƴ���7��T�����g�t�[���u��	9��j'�"�(�����_�7����Em�9
����g���aI�=!�UU��3����^d���ay>k����f<����0H�"/�8.R1q���o��}@���'�OE��фu�s�z������[�n��^�ڱS+p�W�F�ab�Ux��S;}�`f��z6x���E�7�E-�EJ��g#ыz�}�׎�����N6�7�޲q�Pe�?�n���;��Vv)�|�k�,�I�AC]<L}�:%���j>�����<��B����&�/�wM'ּxl|ߩj�,� H���GuW��uj�G`@�H���eR�i��m���G8t7�gJ��3�{m>���@�_�u��OHû�K=����R6�NA?� i��>�,X�X�)��n��A�$?W'a;      \      x������ � �      Y      x������ � �      ^      x������ � �      _      x������ � �      `      x������ � �      a      x������ � �      Z   �   x�5��n�0 D��_Lm��)K
	�����P�T��߇����h.�r-��!(��ЦZC�S
,��b䵞�$0� �������F������v���h�h�J�*b,�i'n�����xϣѵ���/J�:�ӫDo/������9���>u*>O�*7x�s�6NqL�CV5n������%���Gؖ�'P9����Z����E˵E���%_����M��U��I�j1.�aw eO4      e   [   x�3估�¾�8c���8/�������.6]l ��®@rƜ&^�}���vτ��R��~݋�@e�AB���\� �6*F��� 0�/      X   �   x����
�0�g�y������cQ'G��r�@�H���[�٢���C�B� @C�9;Mkw�c��@�����3XD�0�%��P6�0��v����,mSJHԉ�D�B��Ћ��G����+��Ƚ,�T=Yl��J�jL?R�'��;}z��co�r�     